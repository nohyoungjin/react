import { useState, useEffect, useRef } from 'react'
import { useDebounce } from 'use-debounce'
import ReactMarkdown from 'react-markdown'
import MDComponents from 'MDComponents'

const tabs = [
    { text: 'write' }
    { text: 'Preview' }
]

const Editor = ({
    initialData = null,
    showDeleteButton = false,
    showPublishButton = false,
    disabled = false,
    debouncedDelay = 500,
    onChange = () => null,
    onPublish = () => null,
    onDelete = () => null,
}) => {
    const [title, setTitle] = useState(initialData?.title ?? '')
    const [content, setContent] = useState(initialData?.content ?? '')
    const [activeTab, setActiveTab] = useState(0)

    const [debouncedTitle] = useDebounce(title, debouncedDelay)
    const [debouncedContent] = useDebounce(content, debouncedDelay)

    const initialRender = useRef(true)

    useEffect(() => {
        if (initialRender.current) {
            initialRender.current = false
            return
        }
        onChange(debouncedTitle, debouncedContent)
    }, [debouncedTitle, debouncedContent])

    return (
        <div className="">
            <textarea
                value={title}
                onChange={e => setTitle(e.target.value)}
                maxLength={150}
                placeholder="Title...."
                disabled={disabled}
            />
            <div>
                <div>
                    {tabs.map(({text}, i) => (
                        <button
                            key={text}
                            onClick={() => setActiveTab(i)}
                            disabled={disabled}
                        >
                            <span>{text}</span>
                        </button>
                    ))}
                </div>

                {/* Publish & Delete actions */}
                <div>
                    {showPublishbutton ? (
                         <button
                         key={text}
                         onClick={() => onPublish(title, content)}
                         disabled={disabled}
                     >
                         <span>Publish</span>
                     </button>                        
                    ) : null}

                    {showDeletebutton ? (
                         <button
                         key={text}
                         onClick={() => onDelete(title, content)}
                         disabled={disabled}
                     >
                         <span>Publish</span>
                     </button>                        
                    ) : null}
                </div>
            </div>

            {/* Blog post content */}
            {activeTab === 0 ? (
            <textarea
                value={content}
                onChange={e => setContent(e.target.value)}
                placeholder="Tell your story......"
                disabled={disabled}
            />
            ) : (
                <article className="">
                    {content ? (
                        <ReactMarkdown children={content} components={MDComponents} ></ReactMarkdown>
                    ) : (
                        <p>미리보기 할 내용이 없습니다.</p>
                    )}
                </article>
            )}
        </div>
    )
}

export default Editor