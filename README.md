# W3C Technical Reports Design Project

This project is [available on GitHub](https://github.com/w3c/tr-design/).

The purpose of this project is to maintain and improve the style sheets
for current and future [technical reports](http://www.w3.org/TR/) published by the [W3C](http://www.w3.org/).

New style sheets are adoped once a year (see below).
The project goal for 2015 is outstanding maintenance:
to clean up, consolidate, and update the styles without significantly altering the visual look and feel.
(Future releases may significantly alter the visual design,
but we probably want to overhaul the markup first,
and that waits until after the new publication system is sorted out.)

## Contributing

If you're familiar with GitHub then contributing is simple: just fork and make pull requests.
Absolutely everyone is welcome (and even encouraged) to contribute to improve the design of W3C specifications.
Bugfixes, code cleanup, and simple improvements will be unilaterally approved by the *Design Point Person*.
For more significant changes to the visual styles,
discussion on spec-prod@w3.org is encouraged to get feedback and consensus.
(Think of it as a design critique.)

**Do not commit directly to any of the common branches** (`gh-pages` and `2016` at the time of writing) unless you are the *Design Point Person* for the project.
Instead, fork the desired branch and submit a pull request.

## Guidelines for a proper design

1. Ensure the security and privacy of the individuals reading the document;
2. Ensure proper access by everyone regardless of disability;
3. Consider the different languages, scripts, and cultures from around the world;
4. Ensure that individuals can read properly the normative and non-normative parts of the document when scripting is disabled or not available;
5. Consider the impact of the design on the W3C publication ecosystem: publication tools, authoring tools, editors
6. Ensure that the W3C Brand and general W3C website integration are respected, per the W3C Communications Team;
7. Consider the Web user agent compatibility risks (past, present, and future) and the long term maintenance.
8. Use valid CSS and follow CSS best practices.
9. Ensure that the document can be printed beautifully.

Discussions happen through issues, pull requests, and on spec-prod@w3.org.


## Release Process

### Principles

For the purpose of this project, there are two guiding principles to guarantee efficiency and progressive design:

1. **W3C MUST NOT change the design of technical reports already published.**
2. **W3C MAY adopt a new design for technical reports only once per year, on the 1st of January.**

### Process for approving a new design

For any given year:

1. No general proposals for a new design can be made after September 30.
2. No final design can be proposed after October 31. This is intended to ensure a minimum of one month for wide review of the final design before formal adoption.
3. The deadline to obtain W3C Director approval for the final design is November 30. No substantive changes can be made to the final design after approval. This is intended to guarantee a minimum of one month advanced notice for the W3C publication ecosystem (publication tools, authoring tools, editors).
4. The W3C Webmaster must deploy the new style sheets and associated assets no later than December 1st, if approved by the W3C Director.
5. The new design becomes effective on January 1st of the following year for a 12 months duration.

The dates above are deadlines but the earlier the better, especially when considering the schedule of the W3C TPAC meeting.

One _Design Point Person_ per year is in charge of managing general proposals,
producing and proposing the final design,
ensuring [wide reviews](https://www.w3.org/2015/Process-20150901/#wide-review),
addressing issues and pull requests,
and obtaining the W3C Director approval.
Only the *Design Point Person*&nbsp;&mdash;&nbsp;and, occasionally, W3C staff&nbsp;&mdash;&nbsp;should commit to the common branches of the project.
This individual must engage with the Web Community at large and is appointed by the W3C Director.

NOTE: For 2015, the *Design Point Person* is @fantasai.

If the W3C Director cannot approve a new design within a given year, the design of the current year remains effective for the following year.

The W3C Director MAY delegate responsibility (generally to other individuals in the W3C Team) for his role described in this document.

### Bug Fixing

Bug fixing MAY happen on a continuous basis for all style sheets. Published styles are include in releases/ for maintenance purposes.

#### Branches

At any point in time, branch `gh-pages` is used for work on *next year's TR design*, until the first candidate release is branched out from it.
From that moment on, `gh-pages` becomes the development branch for the following cycle.

Branches with years in their names (eg, `2016`) are used exclusively for bug-fixing candidate releases for that specific year.
Commits to `gh-pages` will *not* be propagated to yearly branches.

### Considerations

1. There are no backward compatibility issues since we never change the design of documents already published and the new design MAY NOT accommodate the large set of documents published in the past by W3C anyway.
2. Unique design among all W3C /TR documents is no longer guaranteed. Two W3C specifications published in two different years MAY look completely different. While design consistency from year to year is NOT required, it should be kept in mind and balanced to avoid confusing the Web community.
3. A new design does NOT have to address all possible future refinements before being adopted, such as taking into account all possible future user preferences and how to display all future combinations of those.
4. As a side note, Proposed Recommendations published after the 15th of October should easily allow the W3C Advisory Committee to visualize the document using the new design of the following year. Note however that such new design may be tweaked until November 30 or rejected by the Director.
