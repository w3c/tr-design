# Templates for Process 2020 documents

These are mockup versions of W3C Document for [Process 2020](https://www.w3.org/2020/Process-20200915/).

* FPWD, WDs, and PRs: add required link to GH issues in the headers and remove requirements in the SOTD
* Candidate Recommendation 6.2.7: same as Candidate Recommendation Snapshot 6.2.8.1
* [Candidate Recommendation Snapshot 6.2.8.1](https://w3c.github.io/tr-design/p2020mockup/cr-6.2.8.1.html)
  1. "Snapshot" appears under the status sub-title
  1. SOTD talks about "a Candidate Recommendation Snapshot"
  1. "has received wide review and is intended to gather implementation experience."
  1. Requires a deadline for comments
  1. Choose between 2 sentences to give signal whether it's a living standard or not. (optional)
* [Candidate Recommendation Draft 6.2.8.2](https://w3c.github.io/tr-design/p2020mockup/cr-6.2.8.2.html)
  1. "Draft" appears under the status sub-title
  1. SOTD talks about "a Candidate Recommendation Draft"
  1. "integrate changes from the previous Candidate Recommendation that the Working Group intends to include in a subsequent Candidate Recommendation Snapshot."
  1. Does not include a deadline for comments, since any substantive changes would require the Group to publish a Snapshot before moving to Proposed Recommendation.
  1. No requirements for deadline for comments
  1. Choose between 2 sentences to give signal whether it's a living standard or not.
* [Recommendation 6.2.10](https://w3c.github.io/tr-design/p2020mockup/rec-6.2.10.html)
  1. If the Proposed Recommendation intended to allow new features in Recommendation revisions, add a sentence in the PP paragraph: "This document may be revised with new features using [proposed addition](https://www.w3.org/2020/Process-20200915/#proposed-addition)." to allow new features changes
* [Recommendation (no text change) 6.2.11.1](https://w3c.github.io/tr-design/p2020mockup/rec-6.2.11.1.html)
  1. No change from Process 2019.
  1. If the Proposed Recommendation intended to allow new features in Recommendation revisions, add a sentence in the PP paragraph: "This document may be revised with new features using [proposed addition](https://www.w3.org/2020/Process-20200915/#proposed-addition)." to allow new features changes
  1. Note that some of those changes do not require a republication. Groups are welcome to use our [In-place modification policy](https://www.w3.org/2003/01/republishing/)
* [Recommendation (editorial corrections) 6.2.11.2](https://w3c.github.io/tr-design/p2020mockup/rec-6.2.11.2.html)
  1. No change from Process 2019.
  1. If the Proposed Recommendation intended to allow new features in Recommendation revisions, add a sentence in the PP paragraph: "This document may be revised with new features using [proposed addition](https://www.w3.org/2020/Process-20200915/#proposed-addition)." to allow new features changes
* [Recommendation (candidate corrections) 6.1.5](https://w3c.github.io/tr-design/p2020mockup/rec-6.1.5-correction.html)
  1. "published by the ... Group as a Recommendation. It includes [candidate corrections](https://www.w3.org/2020/Process-20200915/#candidate-correction)."
  1. includes "[Candidate corrections](https://www.w3.org/2020/Process-20200915/#candidate-correction) are marked in the document." using the .correction CSS class
  1. If the Proposed Recommendation intended to allow new features in Recommendation revisions, add a sentence in the PP paragraph: "This document may be revised with new features using [candidate addition](https://www.w3.org/2020/Process-20200915/#proposed-addition)." to allow new features changes
* [Recommendation (candidate additions) 6.1.5](https://w3c.github.io/tr-design/p2020mockup/rec-6.1.5-addition.html)
  1. "published by the ... Group as a Recommendation. It includes [candidate additions](https://www.w3.org/2020/Process-20200915/#candidate-addition)."
  1. includes "[Candidate additions](https://www.w3.org/2020/Process-20200915/#candidate-addition) are marked in the document." using the .addition CSS class
  1. If the Proposed Recommendation intended to allow new features in Recommendation revisions, add a sentence in the PP paragraph: "This document may be revised with new features using [candidate addition](https://www.w3.org/2020/Process-20200915/#proposed-addition)." to allow new features changes
* [Recommendation (substantive corrections) 6.2.11.3](https://w3c.github.io/tr-design/p2020mockup/rec-6.2.11.3.html)
  1. "published by the ... Group as a revised Recommendation. It includes [proposed corrections](https://www.w3.org/2020/Process-20200915/#proposed-correction)."
  1. includes "[Proposed corrections](https://www.w3.org/2020/Process-20200915/#proposed-correction) are marked in the document." using the .correction.proposed CSS class
  1. includes a paragraph to allow for AC Review (WBS questionnaire)
  1. If the Proposed Recommendation intended to allow new features in Recommendation revisions, add a sentence in the PP paragraph: "This document may be revised with new features using [proposed addition](https://www.w3.org/2020/Process-20200915/#proposed-addition)." to allow new features changes
* [Recommendation (new features) 6.2.11.4](https://w3c.github.io/tr-design/p2020mockup/rec-6.2.11.4.html)
  1. "published by the ... Group as a revised Recommendation. It includes [proposed addition](https://www.w3.org/2020/Process-20200915/#proposed-addition), introducing new features since the Previous Recommendation."
  1. includes "[Proposed additions](https://www.w3.org/2020/Process-20200915/#proposed-addition) are marked in the document." using the .addition.proposed CSS class
  1. includes a paragraph to allow for AC Review (WBS questionnaire)
  1. MUST add a sentence in the PP paragraph: "This document may be revised with new features using [proposed addition](https://www.w3.org/2020/Process-20200915/#proposed-addition)." to allow new features changes
* Note that both the addition of new candidate changes and the normative incorporation of mature proposed changes into the Recommendation can be done incrementally, allowing complex specifications to be gradually improved without having to fix everything before anything can be republished. [Recommendation (candidate corrections and additions) 6.1.5](https://w3c.github.io/tr-design/p2020mockup/rec-6.1.5-correction-addition.html) [6.2.11.3 and 6.2.11.4](https://w3c.github.io/tr-design/p2020mockup/rec-6.2.11.34.html) [6.2.11.3 and 6.2.11.4](https://w3c.github.io/tr-design/p2020mockup/rec-6.2.11.34.html)

Advise to be added:

* For PRs:
  1. If it is the intention to incorporate new features in future updates of the Recommendation, please make sure to identify the document as intending to [allow new features](https://www.w3.org/2020/Process-20200915/#allow-new-features). Recommended text is "Future updates to this specification may incorporate [new features](https://www.w3.org/2020/Process-20200915/#allow-new-features)."
* For RECs:
  1. If your Recommendation is allowed to incorporate new features (signaling its intent in a Proposed Recommendation published in the past), please make sure to identify the document as intending to [allow new features](https://www.w3.org/2020/Process-20200915/#allow-new-features). Recommended text is "Future updates to this Recommendation may incorporate [new features](https://www.w3.org/2020/Process-20200915/#allow-new-features)."


