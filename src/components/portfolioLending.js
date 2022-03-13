import React, { useEffect } from 'react';
import ReactGA from 'react-ga';
import FadeIn from 'react-fade-in';

import Footer from './footer';

import pieChart from '../img/portfolio/lending/pieChart.png';
import rankingGraph from '../img/portfolio/lending/rankingGraph.png';
import problemStickies from '../img/portfolio/lending/problemStickies.png';
import sketches from '../img/portfolio/lending/sketches.png';
import userFlow from '../img/portfolio/lending/userFlow.png';
import wireframes from '../img/portfolio/lending/wireframes.png';
import lofi from '../img/portfolio/lending/lofi.png';
import hifi from '../img/portfolio/lending/hifi.png';
import prototype1 from '../img/portfolio/lending/prototype1.png';
import prototype2 from '../img/portfolio/lending/prototype2.png';
import prototype3 from '../img/portfolio/lending/prototype3.png';
import prototype4 from '../img/portfolio/lending/prototype4.png';
import prototype5 from '../img/portfolio/lending/prototype5.png';
import prototype6 from '../img/portfolio/lending/prototype6.png';
import prototype7 from '../img/portfolio/lending/prototype7.png';

const trackLinkClick = (category, action, label) => {
  console.log('GA event:', category, ':', action, ':', label);
  ReactGA.event({
    category,
    action,
    label,
 });
};

const PortfolioLending = (props) => {
  useEffect(() => {
    ReactGA.pageview(window.location.pathname);
    console.log('page=>', window.location.pathname);
  }, []);
  return (
    <FadeIn>
      <div className="content">
        <div id="lending-top-background" className="top-card">
          <div className="text">
            <div className="title">
              Smartphone Lending
            </div>
            <div className="role">
              UX Researcher | UI/UX Designer
            </div>
            <div className="headline">
              Smartphone Lending is a research project that explores how people share technology.
              How do people react in a situation where they are asked to share something as personal
              as their phone with someone else?
            </div>
            <a id="lending-button"
              href="https://drive.google.com/file/d/1hO-qo3KsIsmagpA8XIz3EHspcn1SAP3g/view?usp=sharing"
              rel="noreferrer"
              target="_blank"
              onClick={trackLinkClick.bind(this, 'Portfolio/Lending', 'Lending Paper Click', 'Portfolio Links')}
            >Research Paper
            </a>
          </div>
        </div>
        <ul className="secondary-info">
          <ul className="list">
            <li id="title">TEAM</li>
            <li>Eric Zhang</li>
            <li>Katrina Yu</li>
            <li>Jasmine Mai</li>
          </ul>
          <ul className="list">
            <li id="title">TYPE</li>
            <li>XDiscovery<br />HCI Lab</li>
          </ul>
          <ul className="list">
            <li id="title">TIME</li>
            <li>15 weeks</li>
          </ul>
          <ul className="list">
            <li id="title">TOOLS</li>
            <li>Figma</li>
          </ul>
        </ul>
        <a id="lending-button"
          className="jump-button"
          href="#anchor"
          rel="noreferrer"
          onClick={trackLinkClick.bind(this, 'Portfolio/Lending', 'Lending Jump Click', 'Portfolio Jump to Prototype')}
        >Jump to prototype
        </a>
        <div className="info-section">
          <div id="lending-color" className="section-title">ROLE</div>
          <div className="text-block">
            <b>UX Research:</b> My team and I conducted interviews for user research. Together, we analyzed and synthesized the data to generate insights,
            identify the problem, and generate ideas for possible solutions. This research culminated in a research paper detailing our findings.
            <br /><br />
            <b>UI/UX Design:</b> After the research phase, I was the solo designer on the project. I took the conclusions from our research and created
            designs for an app to help alleviate some of the discomfort in phone-lending situations.
          </div>
        </div>

        <div className="info-section">
          <div id="lending-color" className="section-title">CHALLENGE</div>
          <div id="lending-text" className="text-callout">
            Investigate the moment of interaction when someone asks to borrow someone else’s phone and use those findings to inform
            design considerations that might improve this experience.
          </div>
          <div className="text-block">
            As members of the XDiscovery HCI lab, my team and I were tasked with exploring how human-to-human connection could be impacted by technology.
            Specifically, we set out to research the moment of interaction when someone asks to borrow someone else’s phone. Because phones contain so
            much personal information, how willing are people to trust others with their phone?
          </div>
        </div>

        <div className="info-section">
          <div id="lending-color" className="section-title">RESEARCH</div>
          <div id="lending-text" className="text-callout">
            We conducted 21 interviews with Dartmouth College undergraduates.
          </div>
          <div className="text-block">
            The interview was designed to have two parts:
            <ul>
              <li>
                <b>The experiment:</b> We interviewed participants in pairs so one of us could meet the participant at the scheduled time.
                That person would then ask to borrow the participant’s phone to contact their partner who was “late.” We used this to directly observe
                the phone-lending behavior of our participants.
              </li>
              <li>
                <b>The actual interview:</b> After directly observing our interviewee’s behavior, we sat down with them to unpack why they behaved the way they
                did and to ask about any past experiences they have had with lending their phone.
              </li>
            </ul>
          </div>
          <div className="text-block">
            We discovered a few key takeaways from these interviews:. When we asked participants about previous phone-lending experiences,
            the majority spoke about their experiences as they related to 4 categories of people: family, friends, acquaintances, and strangers.
            Within these categories, we discovered:
            <ul>
              <li>
                People were only willing to hand their unlocked phone to a family member or friend without first taking any precautions or asking for a reason.
              </li>
              <li>
                People were most uncomfortable with strangers. This was the only group where people would either hesitantly lend their phone or completely refuse.
              </li>
            </ul>
          </div>
          <img src={pieChart} alt="Lending Category Pie Chart" width="65%" />
          <div className="text-block">
            The main reasons why people were hesitant about lending their phone were privacy and theft concerns.
            <ul>
              <li>
                Participants were the most worried about borrowers seeing their chat histories. Interestingly, their concern was not about their own privacy.
                Instead, they were worried about borrowers seeing a sensitive text chain that compromised the privacy of the person at the other end of
                the messages.
              </li>
              <li>
                Participants were also worried about theft. Though this concern only applied to strangers, it was the number two concern.
                Several participants explained that they would try and determine a stranger’s trustworthiness by judging their appearance and intention
                before lending their phone.
              </li>
            </ul>
          </div>
          <img src={rankingGraph} alt="Ranking of Lending Concerns" width="65%" />
          <div className="text-block">
            Based on these insights from our research study, we outlined three main guidelines for possible solutions that might improve this phone-lending interaction.
            <ul>
              <li>
                <b>Customizability:</b> The solution should allow for varying levels of restrictions for different groups of borrowers and have a simple one-time setup.
              </li>
              <li>
                <b>Inconspicuousness:</b> The borrower should not notice that the lender has set restrictions
                prior to handing over their phone. So, the solution should have a quick and discreet activation.
              </li>
              <li>
                <b>Safety and privacy:</b> The solution should make the lender more comfortable and confident in lending their phone.
              </li>
            </ul>
          </div>
          <div id="lending-text" className="text-callout">
            We proposed an app where users can customize profiles with varying levels of restrictions that can be launched quickly and discreetly so that
            users could feel safer and more comfortable when sharing their phones.
          </div>
          <div className="text-block">
            This app included features that gave users multiple ways to keep their phone safe.
            <ul>
              <li>
                <b>Smartwatch compatibility:</b> This feature allows users to “keep tabs” on what others are doing on their phone by mirroring the phone’s screen.
                In addition, the user can remotely lock certain apps, or lock the entire phone.
              </li>
              <li>
                <b>Fingerprint scanner:</b> Because many smartphones have fingerprint scanners that allow for multiple prints to be saved, we can leverage this
                to launch custom profiles users have created. Since most people only use one or two fingers to unlock their phones, other fingers can be mapped
                to certain profiles such as a “strangers” profile or a “friends” profile. They can then quickly and inconspicuously launch a profile without
                the borrower ever realizing they have restricted access.
              </li>
              <li>
                <b>Hardware protection:</b> Because one of the top concerns is theft, this feature would leverage the phone’s accelerometer to detect running
                and the phone’s GPS to detect if it is out of range of a secondary device such as a smartwatch. If either are detected, this feature would trigger
                an alarm that would alert anyone nearby. Further, it could lock the phone’s sim card tray so the phone can continue to be traced.
              </li>
            </ul>
          </div>
        </div>

        <div className="info-section">
          <div id="lending-color" className="section-title">DEFINE</div>
          <div className="text-block">
            After the research phase, this project was technically over. But, rather than just leaving the project with the research and proposed solution,
            I wanted to use the research to actually build a solution. So, I ventured on as a one-person team. But, before jumping into design, I wanted to
            define some things more formally to guide me through the rest of the design process.
            <br /><br />
            During the research phase, we all had a general idea of who the user was. But, rather than just using a rather vague definition of “smartphone owners
            in a phone-lending situation,” I wanted a better sense of exactly who I was designing for. Looking back on the research, I found that many people
            are uncomfortable with lending their device, but hand it over despite their discomfort in order to avoid confrontations and awkwardness.
          </div>
          <img src={problemStickies} alt="Problem statement" width="75%" />
        </div>

        <div className="info-section">
          <div id="lending-color" className="section-title">IDEATE</div>
          <div className="text-block">
            Now that I had a clearly defined direction, I could think more critically about the solution. The proposed solution from our research phase
            (an app that allows users to customize profiles with varying levels of restrictions) was a great starting point for the core functionalities.
            I thought about how these features could come together in a simple app and fleshed out the details of how a user might interact with this app.
          </div>
          <img src={sketches} alt="Sketches" width="75%" />
          <div className="text-block">
            After initial explorations, I realized I was making the app overly complicated with features and customizations. After re-evaluating what was most
            important to the experience, I knew that I wanted to focus on creating an experience that was simple and intuitive. So, I focused on the three most
            important components: presets, launching methods, and granting access.
            <ul>
              <li>
                <b>Presets:</b> To accommodate different kinds of users, I had to balance customizability and simplicity. Because our research showed that people
                naturally spoke about four groups of people (family, friends, acquaintances, and strangers), I decided to create preset profiles for each of those
                groups. Users who don’t want to spend much time on customizations can use these default presets. On the other hand, users who enjoy customizing
                their experiences can edit these presets or add their own.
              </li>
              <li>
                <b>Launching methods:</b> I brainstormed multiple ways to launch these presets. In addition to the fingerprint scanner idea my research team and I
                had proposed, I also explored using a smartwatch or a phone’s pulldown settings menu, I decided to include all three methods in order to make the
                app more accessible to a wider range of smartphone users.
              </li>
              <li>
                <b>Granting access:</b> Though my explorations, I realized that granting access to an app is as important as restricting it. Say the borrower asks
                the lender to use Facebook to message a friend, but Facebook is restricted. The lender sees that the borrower really needs to contact their friend
                and agrees to allow access, but now needs to exit our app. This interaction is rather awkward having to hand the phone back and forth. More
                importantly, it defeats the purpose of a security app as the borrower is now holding a completely unlocked phone with full access with all apps.
                To solve for this, I added a quick access feature that allows the lender to change access to certain apps after a preset has been launched.
              </li>
            </ul>
          </div>
          <img src={userFlow} alt="User Flow" width="75%" />
        </div>

        <div className="info-section">
          <div id="lending-color" className="section-title">DESIGN</div>
          <div className="text-block">
            Now that I knew what features I wanted to include, I mapped out the flow between screens. Because I wanted the app to be simple and intuitive,
            I focused on making the navigation clear.
          </div>
          <img src={wireframes} alt="Wireframes" width="85%" />
          <img src={lofi} alt="LoFis" width="85%" />
          <img src={hifi} alt="HiFis" width="85%" />
        </div>

        <div id="anchor" className="info-section">
          <div id="lending-color" className="section-title">PROTOTYPE</div>
          <div id="lending-text" className="text-callout">
            The smartphone-lending app “locks” the phone according to preset profiles that restrict access to predetermined apps. The phone remains “locked” until
            the phone’s owner unlocks it using their typical unlock method such as fingerprint, face ID, or password.
          </div>
          <div className="text-block">
            The app comes pre-loaded with four preset modes: Strangers (most restrictive), acquaintances, friends, family (least restrictive). To customize further,
            the “Add Preset” button allows users to create entirely new categories outside these four.
          </div>
          <img src={prototype1} alt="Home screens" width="45%" />
          <div className="text-block">
            Within each preset, the user can choose which apps they wish to restrict access to. Each app can be configured to have one of theee security options:
            <br /><br />
            <b>Hide app:</b> The app does not show up at all on the phone screen. Using this option, the lender protects their phone by making the borrower think the app is not downloaded at all.
          </div>
          <img src={prototype2} alt="Hide app" width="45%" />
          <div className="text-block">
            <b>Dummy app:</b> The app is present, but not functional. Upon clicking the app, the borrower sees an error message such as a network connectivity
            error. This prevents the borrower from access the app’s functionality.
          </div>
          <img src={prototype3} alt="Dummy app" width="45%" />
          <div className="text-block">
            <b>Privacy lock:</b> The app is functional, but has features restricted. The borrower can use the app, but certain aspects such as posting or search are restricted.
          </div>
          <img src={prototype4} alt="Privacy lock" width="45%" />
          <div className="text-block">
            The “Launch Options” section is how the user chooses to trigger the presets and “lock” the phone. They can choose the fingerprint scanner where each finger
            launches a different preset, the settings dropdown menu where each preset is an icon, or a smartwatch where clicking on our app icon brings up a list of
            presets they can scroll through using the side dial.
          </div>
          <img src={prototype5} alt="Launch options" width="20%" />
          <div className="text-block">
            The “Quick Access” section allows the user to quickly grant access to certain apps without needing to exit the preset. This allows for more flexibility in a
            phone-lending situation when a borrower needs to access a restricted app.
          </div>
          <img src={prototype6} alt="Quick access" width="20%" />
          <div className="text-block">
            The “Other Security Options” section has anti-theft and anti-pickpocket protection. If anti-theft is enabled, the phone’s accelerometer turns on once the
            preset launches. If it detects running, custom actions are triggered such as playing an alarm or locking the sim card tray. If anti-pickpocket is enabled,
            the phone will pair to a secondary device such as a smartwatch. If the phone leaves the range of the bluetooth connection, custom actions will trigger.
          </div>
          <img src={prototype7} alt="Other security" width="45%" />
        </div>

        <div className="info-section">
          <div id="lending-color" className="section-title">TAKEAWAYS</div>
          <div className="text-block">
            This project made me think critically about how to design human interactions that are facilitated by technology. I learned just how integral technology
            —especially a phone—is to people’s lives. It was interesting observing people&apos;s relationship with their devices and how people’s relationships with each
            other can be mediated by technology. This was also my first design project that had hardware integrations. I had to consider how hardware like smartwatches
            and smartphones interface with software which made me focus on designing the interaction between the lender and the borrower over the interface of the app itself.
            <br /><br />
            This project also taught me the merits of conducting thorough research during the early stages of the design process. The research informed design decisions along
            the way and made the process of designing much easier as I had evidence to back my decisions. This was especially beneficial while designing alone because I could
            lean on our research findings through the design process.
          </div>
        </div>
        <Footer />
      </div>
    </FadeIn>
  );
};

export default PortfolioLending;
