import React from 'react';
import arrayData from 'components/Json/arrayData.json';

const Page1 = () => {

    const newArrayData = arrayData.map((item, index) => {
        return (
            <div key={index} className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">{index + 1} {item.name}({item.age}) from {item.country}</dt>
                <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                    
                </dd>
            </div>
        )
    })

    return (
        <div>
            <div className="bg-gray-100">
                <div className="mx-auto max-w-7xl py-12 sm:px-6 lg:px-8">
                    <div className="mx-auto max-w-4xl">
                        <div className="overflow-hidden bg-white shadow sm:rounded-lg">
                            <div className="px-4 py-5 sm:px-6">
                                <h3 className="text-lg font-medium leading-6 text-gray-900">회원 정보</h3>
                            </div>
                            <div className="border-t border-gray-200">
                                <dl>
                                    {newArrayData}
                                </dl>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    ) 
}

export default Page1