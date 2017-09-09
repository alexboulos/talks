// Import React
import React from "react";

// Import Spectacle Core tags
import {
  BlockQuote,
  Cite,
  Deck,
  Heading,
  Image,
  Quote,
  Slide,
  Appear,
  List,
  ListItem,
  CodePane,
  Code,
  Link,
  Layout,
  Fill,
  Text
} from "spectacle";

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from "spectacle/lib/themes/default";

import Terminal from "spectacle-terminal";

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");

const images = {
  lerna: require("../assets/lerna.png"),
  yarn: require("../assets/yarn.svg"),
  title: require("../assets/title.jpg"),
  step1: require("../assets/step1.png"),
  step2: require("../assets/step2.png"),
  step3: require("../assets/step3.png"),
  step4: require("../assets/step4.png"),
  step5: require("../assets/step5.png"),
  step6: require("../assets/step6.png"),
  benefits: require("../assets/benefits.jpg"),
  challenges: require("../assets/challenges.jpg"),
  madscience: require("../assets/madscience.png")
};

preloader(images);

const theme = createTheme({
  primary: "#4f4f4f",
  secondary: "#fff",
  tertiary: "#03A9FC",
  quartenary: "#CECECE"
}, {
  primary: "Montserrat",
  secondary: "Montserrat"
});

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck transition={["slide"]} progress="number" transitionDuration={500} theme={theme}>
        <Slide bgColor="primary">
          <Image src={images.title} />
          <Heading size={6} textColor="secondary" lineHeight={3}>ReactNext 2017</Heading>
            <Layout>
              <Fill>
                <Text textColor="secondary">Johannes Stein</Text>
              </Fill>
              <Fill>
                <Text textColor="secondary">@frostney_</Text>
              </Fill>
            </Layout>
        </Slide>
        <Slide>
          <Heading size={2} textColor="secondary">🖐</Heading>
        </Slide>
        <Slide>
          <Heading size={2} textColor="secondary">What is a monorepo?</Heading>
          <Link href="https://developer.atlassian.com/blog/2015/10/monorepos-in-git/" textColor="secondary">developer.atlassian.com/blog/2015/10/monorepos-in-git/</Link>
          </Slide>
        <Slide>
          <Heading size={3} textColor="secondary">
            The repository contains more than one logical project
          </Heading>
        </Slide>
        <Slide>
          <Heading size={3} textColor="secondary">
            These projects are most likely unrelated, loosely connected or can be connected by other means
          </Heading>
        </Slide>
        <Slide bgImage={images.madscience} bgDarken={0.5}>
          <BlockQuote>
            <Quote textColor="secondary">Multiple repositories? Where we're going, we don't need... multiple repositories.</Quote>
            <Cite>Doc Brown (Back To The Future)</Cite>
          </BlockQuote>
        </Slide>
        <Slide bgColor="secondary" textColor="primary">
          <BlockQuote>
            <Quote>Give it five minutes.</Quote>
            <Cite>https://signalvnoise.com/posts/3124-give-it-five-minutes</Cite>
          </BlockQuote>
        </Slide>
        <Slide>
          <Heading size={2} textColor="secondary" style={{ paddingBottom: 20 }}>
            Let's create a Twitter clone
          </Heading>
          <Appear>
            <Heading size={4} textColor="secondary">Not for realsies, just as an architecture example for the purposes of this talk</Heading>
          </Appear>
        </Slide>
        <Slide>
          <Heading size={3} textColor="secondary" style={{ paddingBottom: 20 }}>
            Imagine this project growing over time
          </Heading>
        </Slide>
        <Slide bgColor="primary">
          <Image src={images.step1} />
        </Slide>
        <Slide bgColor="primary">
          <Image src={images.step2} />
        </Slide>
        <Slide bgColor="primary">
          <Image src={images.step3} />
        </Slide>
          <Slide bgColor="primary">
          <Image src={images.step4} />
        </Slide>
        <Slide bgColor="primary">
          <Image src={images.step5} />
        </Slide>
        <Slide bgColor="primary">
          <Image src={images.step6} />
        </Slide>
        <Slide>
          <CodePane source={require("raw-loader!../assets/polyrepo.example")} />
        </Slide>
        <Slide>
          <CodePane source={require("raw-loader!../assets/monorepo.example")} />
        </Slide>
        <Slide>
          <Heading size={3} textColor="secondary">It's just a bunch of folders</Heading>
        </Slide>
        <Slide bgImage={images.benefits} bgDarken={0.45}>
          <Heading size={2} textColor="secondary">
            Benefits
          </Heading>
        </Slide>
        <Slide bgColor="primary">
          <Heading size={3} textColor="secondary">
            Single lint, build, test and release process
          </Heading>
        </Slide>
        <Slide>
          <Heading size={4} textColor="secondary" style={{ paddingBottom: 40 }}>
            Decentralized ESLint files...
          </Heading>
          <CodePane source={require("raw-loader!../assets/polyrepo.eslint.example")} />
        </Slide>
        <Slide>
          <Heading size={4} textColor="secondary" style={{ paddingBottom: 40 }}>
            ...become centralized
          </Heading>
          <CodePane source={require("raw-loader!../assets/monorepo.eslint.example")} />
        </Slide>
        <Slide>
          <Heading size={4} textColor="secondary" style={{ paddingBottom: 40 }}>
            Extend from centralized if necessary
          </Heading>
          <CodePane lang="json" source={require("raw-loader!../assets/eslintrc.example")} />
        </Slide>
        <Slide bgColor="primary">
          <Heading size={3} textColor="secondary">
            Easier to set up the development environment
          </Heading>
        </Slide>
        <Slide bgColor="primary">
          <Heading size={3} textColor="secondary">
            Easier to coordinate changes across the codebase
          </Heading>
        </Slide>
        <Slide>
          <Heading size={3} textColor="secondary">
            Removes dependencies on code reviews
          </Heading>
        </Slide>
        <Slide>
          <Heading size={3} textColor="secondary">
            Removes the need to release common pieces of code
          </Heading>
        </Slide>
        <Slide bgColor="primary">
          <Heading size={3} textColor="secondary">
            Simplifies end-to-end testing
          </Heading>
        </Slide>
        <Slide bgImage={images.challenges} bgDarken={0.45}>
          <Heading size={2} textColor="secondary">
            Challenges
          </Heading>
        </Slide>
        <Slide bgColor="primary">
          <Heading size={3} textColor="secondary">
            Intimidating codebase
          </Heading>
      </Slide>
        <Slide bgColor="primary">
          <Heading size={3} textColor="secondary">
            Continous integration might need to be configured
          </Heading>
        </Slide>
        <Slide>
          <CodePane lang="jsx" source={require("raw-loader!../assets/ci.example")} />
        </Slide>
        <Slide bgColor="primary">
          <Heading size={3} textColor="secondary">
            Dealing with the size of monorepos
          </Heading>
        </Slide>
        <Slide bgColor="primary">
          <Heading size={4} textColor="secondary">
            Check out single branch
          </Heading>
          <Appear>
            <Code textColor="secondary">git clone myrepo --single-branch</Code>
          </Appear>
        </Slide>
        <Slide>
          <Heading size={4} textColor="secondary">
            Shallow clone
          </Heading>
          <Appear>
            <Code textColor="secondary">git clone myrepo --depth=1</Code>
          </Appear>
          <br/>
          <Appear>
            <Code textColor="secondary">git clone myrepo --shallow-since=2017-01-01</Code>
          </Appear>
          <Appear>
          <Heading size={4} textColor="secondary">(Uses <Code textColor="secondary">--single-branch</Code> by default)</Heading>
          </Appear>
        </Slide>
        <Slide>
          <Heading size={4} textColor="secondary">Check out specific folders (sparse checkout)</Heading>
        </Slide>
        <Slide>
          <Heading size={4} textColor="secondary">
            Git Large File Storage
          </Heading>
        </Slide>
        <Slide>
          <CodePane lang="jsx" source={require("raw-loader!../assets/ci.example")} />
        </Slide>
        <Slide bgColor="primary">
          <Heading size={3} textColor="secondary">
            Synchronization with Open Source repositories
          </Heading>
        </Slide>
        <Slide bgColor="primary">
          <Heading size={4} textColor="secondary">
            Git submodules
          </Heading>
        </Slide>
        <Slide bgColor="primary">
          <Heading size={3} textColor="secondary">
            Keeping certain modules independant
          </Heading>
        </Slide>
        <Slide bgColor="primary">
          <Heading size={3} textColor="secondary">
            Ownership
          </Heading>
        </Slide>
        <Slide bgColor="primary">
          <Heading size={2} textColor="secondary">
            Tooling
          </Heading>
        </Slide>
        <Slide bgColor="primary">
          <Heading size={3} textColor="secondary">
            It's just a bunch of folders
          </Heading>
          <Appear>
          <Heading size={3} textColor="secondary">
            We need a tool to run the same command across multiple folders
          </Heading>
          </Appear>
        </Slide>
        <Slide bgColor="primary">
          <Image src={images.lerna} />
        </Slide>
        <Slide bgColor="secondary" textColor="primary">
          <BlockQuote>
            <Quote>Juggling a multimodule project over multiple repos is like trying to teach a newborn baby how to ride a bike.</Quote>
            <Cite>Babel (github.com/babel/babel/blob/7.0/doc/design/monorepo.md)</Cite>
          </BlockQuote>
        </Slide>
        <Slide>
          <Heading size={3} textColor="secondary" style={{ paddingBottom: 40, lineHeight: 0.5 }}>
            <Code textColor="secondary">yarn add global lerna</Code>
          </Heading>
          <Appear>
            <Heading size={3} textColor="secondary" style={{ lineHeight: 0.75 }}>
              (<Code textColor="secondary">npm install -g lerna</Code>)
            </Heading>
          </Appear>
        </Slide>
        <Slide>
          <Heading size={3} textColor="secondary">Let's create a monorepo</Heading>
          <Terminal title="" output={[
            "lerna init",
            `├── lerna-debug.log
    ├── lerna.json
    ├── package.json
    └── packages
        ├── chat-client
        │   ├── node_modules
        │   │   └── ui-components -> ../../ui-components
        │   └── package.json
        ├── chat-server
        │   └── package.json
        ├── newsfeed
        │   ├── node_modules
        │   │   └── ui-components -> ../../ui-components
        │   └── package.json
        └── ui-components
            ├── node_modules
            │   ├── asap
            │   ├── core-js
            │   ├── create-react-class
            │   ├── encoding
            │   ├── fbjs
            │   ├── iconv-lite
            │   ├── is-stream
            │   ├── isomorphic-fetch
            │   ├── js-tokens
            │   ├── loose-envify
            │   ├── node-fetch
            │   ├── object-assign
            │   ├── promise
            │   ├── prop-types
            │   ├── react
            │   ├── setimmediate
            │   ├── ua-parser-js
            │   └── whatwg-fetch
            ├── package-lock.json
            └── package.json

28 directories, 8 files`
          ]}
          />
        </Slide>
        <Slide>
          <Heading size={3}><Code>lerna.json</Code></Heading>
          <CodePane lang="json" source={require("raw-loader!../assets/lerna.json.example")} />
        </Slide>
        <Slide>
          <Heading size={3}>Bootstrap</Heading>
        </Slide>
        <Slide bgColor="primary">
          <Heading size={4} textColor="secondary">
            Install dependencies
          </Heading>
        </Slide>
        <Slide bgColor="primary">
          <Heading size={4} textColor="secondary">
            Link dependencies
          </Heading>
        </Slide>
        <Slide>
          <Heading size={3}>Running scripts</Heading>
        </Slide>
        <Slide>
          <Heading size={3}>Releases</Heading>
        </Slide>
        <Slide>
          <Heading size={4}>Independant release</Heading>
        </Slide>
        <Slide>
          <Heading size={3}>Import repositories</Heading>
        </Slide>
        <Slide bgColor="primary">
          <Image src={images.yarn} />
        </Slide>
        <Slide bgColor="primary">
          <Heading size={4} textColor="secondary">
            Remember when Lerna installs its dependencies for each project?
          </Heading>
        </Slide>
        <Slide>
            <Heading size={1} textColor="secondary" caps lineHeight={1}>Thank you!</Heading>
            <Heading size={2} textColor="secondary" style={{ marginTop: 40, marginBottom: 40 }}>❤️</Heading>
            <Heading size={2} textColor="secondary" style={{ marginTop: 40, marginBottom: 40 }}>
            <Text>
              <Link textColor="secondary" href="http://frostney.github.io/talks/monorepo-reactnext">http://frostney.github.io/talks/monorepo-reactnext</Link>
            </Text>
            </Heading>
            <Layout>
              <Fill>
                <Text textColor="secondary">@frostney_</Text>
              </Fill>
              <Fill>
                <Text textColor="secondary">#reactnext</Text>
              </Fill>
            </Layout>
          </Slide>
      </Deck>
    );
  }
}
