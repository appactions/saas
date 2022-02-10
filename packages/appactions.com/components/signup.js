import { ArrowRight } from 'phosphor-react';
import { useState } from 'react';

const STATUSES = {
    INIT: 'INIT',
    SUBMITTING: 'SUBMITTING',
    ERROR: 'ERROR',
    SUCCESS: 'SUCCESS',
};

function SignUp({ label = 'Sign up', light }) {
    const [status, setStatus] = useState(STATUSES.INIT);
    const [value, setValue] = useState('');

    const onSubmit = event => {
        event.preventDefault();

        setStatus(STATUSES.SUBMITTING);

        fetch('api/subscribe', {
            method: 'POST',
            body: JSON.stringify({
                email: value,
            }),
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then(res => {
                if (res.ok) {
                    setStatus(STATUSES.SUCCESS);
                } else {
                    setStatus(STATUSES.ERROR);
                }
            })
            .catch(() => {
                setStatus(STATUSES.ERROR);
            })
            .finally(() => setValue(''));
    };

    if (status === STATUSES.SUCCESS) {
        return (
            <div className="p-4 rounded-md bg-green-50">
                <div className="flex">
                    <div className="flex-shrink-0">
                        {/* Heroicon name: solid/check-circle */}
                        <svg
                            className="w-5 h-5 text-green-400"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            aria-hidden="true"
                        >
                            <path
                                fillRule="evenodd"
                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                clipRule="evenodd"
                            />
                        </svg>
                    </div>
                    <div className="ml-3">
                        <h3 className="text-sm font-medium text-green-800">
                            Success! Thank you for your interest.
                        </h3>
                    </div>
                </div>
            </div>
        );
    }

    if (status === STATUSES.ERROR) {
        return (
            <div className="p-4 rounded-md bg-red-50">
                <div className="flex">
                    <div className="flex-shrink-0">
                        {/* Heroicon name: solid/x-circle */}
                        <svg
                            className="w-5 h-5 text-red-400"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            aria-hidden="true"
                        >
                            <path
                                fillRule="evenodd"
                                d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                                clipRule="evenodd"
                            />
                        </svg>
                    </div>
                    <div className="ml-3">
                        <h3 className="text-sm font-medium text-red-800">
                            Something went wrong.
                        </h3>
                        <button
                            className="mt-2 text-sm text-red-700 underline"
                            onClick={event => {
                                event.preventDefault();
                                setStatus(STATUSES.INIT);
                            }}
                        >
                            Click here to try again
                        </button>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <form onSubmit={onSubmit}>
            <div className="flex flex-col w-full sm:flex-row sm:items-center">
                <div className="w-full">
                    <label htmlFor="email" className="sr-only">
                        Email address
                    </label>
                    <input
                        id="email"
                        type="email"
                        name="email"
                        placeholder="you@domain.com"
                        disabled={status === STATUSES.SUBMITTING}
                        className={`w-full block py-2 sm:w-full font-sans text-lg font-medium placeholder-gray-400 border-2 rounded-lg sm:rounded-r-none sm:rounded-l-lg text-gray ${
                            light ? 'border-brand-green' : 'border-gray-800'
                        }`}
                        data-cta="cta-input"
                        value={value}
                        onChange={e => setValue(e.target.value)}
                    />
                </div>
                <div className="mt-2 sm:mt-0">
                    <button
                        type="submit"
                        disabled={status === STATUSES.SUBMITTING || !value}
                        className={`block sm:inline w-full items-center px-3 py-2 font-sans text-lg font-bold tracking-wider text-white uppercase border-2 rounded-lg sm:rounded-l-none sm:rounded-r-lg ${
                            light
                                ? 'bg-brand-green border-brand-green'
                                : 'bg-gray-800 border-gray-800'
                        } ${
                            status === STATUSES.SUBMITTING || !value
                                ? 'cursor-auto'
                                : 'cursor-pointer'
                        } hover:opacity-80`}
                    >
                        {label}
                    </button>
                </div>
            </div>
        </form>
    );
}

export default SignUp;
