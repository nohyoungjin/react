import React from 'react';
import arrayData from 'components/Json/arrayData.json';

const arrData = () => {

    const newArrayData = arrayData.map((item, index) => {
        return (
            <div className="border-t border-gray-200">
                <dl>
                    <div key={index} className="grid gap-4 grid-cols-3 py-5 px-6 bg-gray-50">
                        <dt className="text-sm text-gray-500">
                            {index + 1} {item.name}({item.age}) from {item.country}
                        </dt>
                        <dd className="col-span-2 mt-0 text-sm text-gray-900"></dd>
                    </div>
                </dl>
            </div>
        )
    })

    return (
        <div className="bg-sky-500">
            <div className="max-w-7xl mx-auto py-12">
                <div className="max-w-4xl mx-auto">
                    <div className="overflow-hidden bg-white shadow rounded-lg">
                        <div className="py-5 px-6">
                            <h3 className="text-lg font-medium text-gray-900 leading-6">회원 정보</h3>
                        </div>
                        {newArrayData}
                    </div>
                </div>
            </div>
        </div>
    ) 
}

export default arrData