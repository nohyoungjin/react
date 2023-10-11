import { createMachine, assign } from 'xstate';
import { useMachine } from '@xstate/react';

import { useEffect } from 'react';

import Layout from "components/Layout/Layout"

const postPurchase = (cart) =>
  // fetch()로 API호출 했다 치고...
  new Promise((res) => {
    setTimeout(() => {
      res(true);
    }, 2000);
  });

const cartMachine = createMachine(
  {
    id: 'cart',
    initial: 'empty',
    context: {
      items: [],
    },
    states: {
      empty: {  // 비어있거나
        on: {
          ADD_ITEM: {
            target: 'hold',
            actions: ['addItem'],
          },
        },
      },
      hold: {  // 뭔가를 담고 있음
        always: {
          target: 'empty',
          cond: 'isEmpty',
        },
        on: {
          ADD_ITEM: {
            actions: ['addItem'],
          },
          RESET_ITEMS: {
            target: 'empty',
            actions: ['resetItems'],
          },
          REMOVE_ITEM: {
            actions: ['removeItem'],
          },
          PURCHASE: {
            target: 'purchasing',
          },
        },
      },
      purchasing: {
        invoke: {
          id: 'purchasing',
          src: (context) => postPurchase(context.items),
          onDone: {
            target: 'done',
            actions: ['purchased'],
          },
        },
      },
      done: {
        type: 'final',
        entry: ['resetItems'],
      },
    },
  },
  {
    actions: {
      addItem: assign({
        items: ({ items }, event) => [...items, event.item],
      }),
      resetItems: assign({
        items: [],
      }),
      removeItem: assign({
        items: ({ items }, event) => items.filter((item) => item !== event.name),
      }),
    },
    guards: {
      isEmpty: ({ items }) => items.length === 0,
    },
  }
);

const Cart = () => {
  const [state, send, service] = useMachine(cartMachine);

  useEffect(() => {
    const listener = () => console.log('done');

    service.onDone(listener);

    return () => service.off(listener);
  }, []);

  return (
    <Layout>
    <div>
      <p>{state.value}</p>
      <ul>
        {state.context.items.map((name, index) => (
          <li key={index}>
            {name}
            <button onClick={() => send('REMOVE_ITEM', { name })}>X</button>
          </li>
        ))}
      </ul>
      <button
        onClick={() => {
            send('ADD_ITEM', { 
                item: `item${Date.now()}` 
            });
        }}
      >
        아이템 추가
      </button>
      <button
        onClick={() => {
          send('RESET_ITEMS');
        }}
      >
        아이템 재설정
      </button>
      <button
        onClick={() => {
          send('PURCHASE');
        }}
      >
        아이템 구매
      </button>
    </div>
    </Layout>
  );
};

export default Cart;