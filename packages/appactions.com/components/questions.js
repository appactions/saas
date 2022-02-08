import { faqs } from 'misc/faq';

const Questions = () => (
    <section className="max-w-7xl mx-auto py-12 px-4 divide-y divide-gray-200 sm:px-6 lg:py-16 lg:px-8">
        <h2 className="my-4 text-4xl font-slab text-gray md:text-5xl lg:text-6xl">Frequently asked questions</h2>
        <div className="mt-8">
            <dl className="divide-y divide-gray-200">
                {faqs.map((faq, index) => (
                    <div key={index} className="pt-6 pb-8 md:grid md:grid-cols-12 md:gap-8">
                        <dt className="text-base font-medium text-gray-900 md:col-span-5">{faq.question}</dt>
                        <dd className="mt-2 md:mt-0 md:col-span-7">
                            <p className="text-base text-gray-500">{faq.answer}</p>
                        </dd>
                    </div>
                ))}
            </dl>
        </div>
    </section>
);

export default Questions;
