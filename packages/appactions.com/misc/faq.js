export const faqs = [
    {
        question: 'How does this compare to Cypress?',
        answer: 'Our current implementation is a plugin for Cypress. It will be a standalone solution in the future.',
    },
    {
        question: "What's the benefit of using this tool instead of just plain Cypress?",
        answer: 'App Actions tests are authored on a high level, enabling session-recording, better quality tests, and a much better experience when running and maintaining the test suite. Also, we support react-three-fiber!',
    },
    {
        question: "What's the learning curve?",
        answer: 'There are two parts of using App Action, the integration, and the actual test writing. The first requires learning our API, but that does not concern the whole team and, once done, requires surprisingly little attention. The testing part almost has no learning curve. In an ideal situation, the entire test writing happens as session-recording, which is just manual testing your app once.',
    },
    {
        question: 'Does the session recording work with react-three-fiber?',
        answer: 'Yes! All features work across all React renderers.',
    },
    {
        question: 'Who finds the most value in the current version?',
        answer: "There are three types of teams in this category. (1) react-three-fiber users: session-recording-based tests perform much better for a non-conventional app (like non-CRUDs). (2) A team that wants to introduce testing to a large project doesn't have many tests. Writing unit tests for somebody else's code is challenging and slow. Instead, session-recording is a way better investment. (3) Teams who find writing integration tests in Cypress cumbersome or face many difficulties maintaining their current tests.",
    },
    {
        question: 'My question is not on this list. Who can answer me?',
        answer: (
            <>
                We will set up a Discord soon, but in the meantime, feel free to slide into my DMs:{' '}
                <a className="underline" href="https://twitter.com/miklosme" target="_blank" rel="noopener noreferrer">
                    @miklosme
                </a>
                .
            </>
        ),
    },
];
