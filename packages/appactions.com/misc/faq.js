export const faqs = [
    {
        question: 'How does this compare to Cypress?',
        answer: 'Our current implementation is a plugin for Cypress. It will be a standalone solution in the future.',
    },
    {
        question: "What's the benefit of using this tool instead of just plain Cypress?",
        answer: 'App Actions tests are authored on a high level, which enables session-recording, better quality tests, and much better experience when it comes to running and maintaining the test suite. Also, we support react-three-fiber!',
    },
    {
        question: "What's the learning curve?",
        answer: 'There are two parts of using App Action, the integration and the actual test writing. The first requires learning our API, but that does not concern the whole team, and once done, requires surprisingly little attention. The testing part almost have no learning curve. In ideal situtation the while test writing happens as session-recording, which is just manual testing your app once.',
    },
    {
        question: 'Does the session recording work with react-three-fiber?',
        answer: 'Yes! All features work across all React renderers.',
    },
    {
        question: 'Who finds the most value in the current version?',
        answer: "There are three types of teams in this category. (1) react-three-fiber users: session-recording based tests perform much better for non-conventional app (like non-CRUDs). (2) A team that wants to introduce testing to a large project, that doesn't have a lot of tests. Writing unit tests for somebody else's code is very difficult and slow process. Instead, session-recording is a way better investment. (3) Teams who find writing integration tests in Cypress cumborsome or facing a lot of difficulties to maintain their current tests.",
    },
    {
        question: 'My question is not in this list. Who can answer me?',
        answer: (
            <>
                We are going to set up a Discord soon, but in the meantime, feel free to slide into my DMs:{' '}
                <a className="underline" href="https://twitter.com/miklosme" target="_blank" rel="noopener noreferrer">
                    @miklosme
                </a>
                .
            </>
        ),
    },
];
