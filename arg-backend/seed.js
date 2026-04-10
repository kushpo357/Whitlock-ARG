require('dotenv').config();
const mongoose = require('mongoose');

const StageSchema = new mongoose.Schema({
  stageNumber: { type: Number, required: true, unique: true },
  correctAnswer: { type: String, required: true },  
  maxSlots: { type: Number, required: true },
  slotsTaken: { type: Number, default: 0 },
  blog: {
    title: String,
    intro: String,
    incidentDetails: String,
    timeline: [String],
    conclusion: String
  },
  puzzle: {
    prompt: String,
    hint: String
  },
  diary: {
    date: String,
    content: String
  }
});

const Stage = mongoose.model('Stage', StageSchema);

mongoose.connect(process.env.MONGO_URI || "mongodb://127.0.0.1:27017/witlock")
  .then(async () => {
    console.log("Connected to database...");
    
    await Stage.deleteMany({});
    console.log("Cleared old stages...");

    const stages = [
      { 
        stageNumber: 1, 
        correctAnswer: "savehumanity", 
        maxSlots: 999,
        blog: {
          title: "Irregularities in User Data Mapping within Academic Record Systems",
          intro: "Recent analysis has revealed inconsistencies in user data mapping across internal academic record systems belonging to EduCore Systems Pvt. Ltd. The issue appears to involve misaligned identifiers and unexpected overlaps in student-linked data clusters.\n\nWhile the system remains operational, anomalies suggest deeper structural irregularities that require investigation.",
          incidentDetails: "The irregularity was first observed during a routine audit of student-submitted forms, where certain records appeared duplicated, misplaced, or incorrectly associated with unrelated identifiers.\n\nSeveral of these entries were collected through a centralized interface resembling a Google-based submission system, raising concerns about integrity at the point of input.\n\nNotably, multiple entries traced back to a single input collection point, suggesting that the source of inconsistency may not lie within storage systems, but at the stage of initial data submission.\n\nFurther inspection of internal student data tables revealed that some user identifiers appeared consistently grouped under a specific cluster reference: 17, despite belonging to unrelated entries.\n\nA subset of these identifiers repeatedly appeared linked to the same physical mapping point, indicating that the anomaly may extend beyond digital records.",
          timeline: [
            "08:40 AM — Initial inconsistency detected in submitted forms",
            "09:05 AM — Duplicate identifiers observed across tables",
            "09:17 AM — Cluster grouping anomaly identified (Cluster 17)",
            "09:42 AM — Cross-verification initiated at input and mapping levels"
          ],
          conclusion: "The presence of consistent misalignment across user identifiers suggests that the anomaly is not random.\n\nInstead, it points toward a controlled irregularity within the system — one that originates at the point of entry and persists through structured grouping mechanisms.\n\nFurther investigation is required at:\n- The initial data collection interface (forms)\n- The structured mapping within internal tables\n- The physical mapping of identifiers within cluster groupings"
        },
        puzzle: { prompt: "Identify the localized trace.", hint: "Cluster 17 -> Find the physical note" },
        diary: { date: "12/09", content: "I noticed something strange today.\nIt wasn’t anything obvious at first. Just small inconsistencies — things not matching up the way they should. I’ve seen stuff like that before, but this felt different.\nIt’s not just one place either. It shows up across different things, especially when I was going through old cyber incident reports. Dates slightly off, details not lining up properly… like something had been changed, but only a little.\nI probably wouldn’t have thought much about it if I hadn’t seen that note.\nThere was a small chit under one of the desks. I don’t know who left it there. It didn’t explain anything, just pointed me to look again.\n<span class=\"crooked\">W</span>eird.\nI don’t know what I’m looking at yet, but I feel like this isn’t random" }
      },
      { 
        stageNumber: 2, 
        correctAnswer: "undefeated", 
        maxSlots: 999,
        blog: {
          title: "Unauthorized Access to Internal Systems via Social Engineering Vector",
          intro: "A major security breach was identified within Spotify Technologies, resulting in unauthorized access to internal administrative tools and sensitive system controls.\n\nThe incident exposed vulnerabilities not in infrastructure, but in human-facing access points and internal trust mechanisms.",
          incidentDetails: "The breach began when an attacker gained access to an employee account through social engineering techniques. By posing as a trusted internal entity, the attacker was able to convince the employee to provide credentials that allowed entry into Spotify’s internal network.\n\nOnce inside, the attacker accessed internal communication platforms, administrative dashboards, and restricted tools. The intrusion did not rely on malware or system vulnerabilities, but rather on exploiting trust within the organization.\n\nThe attacker reportedly navigated multiple internal systems, even interacting with administrative interfaces in ways that appeared almost casual — an unusual level of access for a single compromised account.\n\nThe nature of the breach, particularly the method of entry and lateral movement across systems, closely resembles previously documented incidents in other major tech platforms — though the context here remains specific to Spotify.\n\nNotably, internal logs suggest that access patterns followed a strictly ordered sequence, where resources were accessed step-by-step rather than randomly. One particular interaction chain stood out, occurring at position 18 within the sequence.\n\nFurther analysis revealed that the meaningful information was not in the access itself, but in the content being consumed. Investigators noted that extracting meaning depended on isolating a specific word position (notably the 7th) within that content, rather than interpreting it as a whole.",
          timeline: [
            "Initial contact established with employee",
            "Credentials compromised",
            "Internal system access gained",
            "Unauthorized control confirmed at 01:42"
          ],
          conclusion: "The incident highlights a critical weakness in modern systems — reliance on assumed trust.\n\nSecurity risks are no longer limited to technical flaws, but extend to:\n- Human interaction\n- Internal communication channels\n- Structured access patterns\n\nIn particular, investigators emphasized that understanding such incidents requires:\n- Following the correct sequence\n- Identifying the precise moment\n- Extracting the relevant word from within content\n\nVerification must extend beyond systems to the sequence, timing, and interpretation of accessed material, especially when access appears legitimate."
        },
        puzzle: { prompt: "Extract the isolated term.", hint: "playlist → song → lyrics (sequence 18, 1:42, 7th word)" },
        diary: { date: "16/09", content: "I went back to check more of those incident reports.\nIt’s not just one or two. The same kind of inconsistencies keep showing up across completely different cases. Different companies, different timelines — but the errors feel… similar.\nNot big enough to be obvious. Just small changes. A name swapped. A platform that doesn’t quite fit. Something you’d ignore unless you were really paying attention.\nThat’s w<span class=\"crooked\">h</span>at’s bothering me.\nIf this was random, it wouldn’t repeat like this.\nI tried looking up one of the incidents again from memory. The details didn’t match what I remembered. Not exactly. Close, but not the same.\nThat shouldn’t happen.\nEither I’m remembering things wrong… or something is changing how this information is being shown.\nI don’t know which one is worse." }
      },
      { 
        stageNumber: 3, 
        correctAnswer: "illusion", 
        maxSlots: 999,
        blog: {
          title: "Coordinated Account Compromise via Internal Access Channels",
          intro: "A coordinated account compromise incident was identified within Instagram Platforms, affecting multiple high-visibility user accounts simultaneously.\n\nThe breach raised concerns regarding centralized access control and internal account management systems.",
          incidentDetails: "The attack involved unauthorized access to a limited set of internal administrative tools, allowing the attacker to gain control over multiple user accounts without directly compromising individual credentials.\n\nOnce access was established, several accounts began exhibiting synchronized activity patterns, suggesting a centralized control mechanism rather than independent breaches.\n\nNotably, affected accounts displayed subtle but deliberate modifications in their public-facing information — particularly within profile descriptions and connected account networks.\n\nThese changes, while minor in isolation, appeared to form a linked structure when observed collectively, indicating that the attacker may have used multiple Instagram accounts to distribute fragments of a larger message.\n\nThe pattern suggests that meaning was not contained within a single account, but instead emerged only when connections between accounts were examined together.",
          timeline: [
            "Initial administrative access established",
            "Multiple accounts accessed in quick succession",
            "Profile-level modifications introduced",
            "Coordinated behavior observed across accounts"
          ],
          conclusion: "The incident highlights risks associated with centralized access systems and the potential for large-scale impact through limited entry points.\n\nMore importantly, it demonstrates that:\n- Individual data points may appear insignificant\n- But structured connections between them can reveal hidden intent\n\nAnalysis of such incidents requires not just inspection of isolated elements, but understanding the relationships between connected entities, especially when patterns are distributed across multiple sources."
        },
        puzzle: { prompt: "Compile and solve the network riddle.", hint: "bios + followers + connections" },
        diary: { date: "19/09", content: "I think I understand <span class=\"crooked\">it</span> a little better now.\nIt’s not in one place.\nI kept looking at things individually, trying to make sense of each piece on its own. That doesn’t work. Nothing looks wrong when you isolate it.\nBut when you start connecting things… that’s when it changes.\nAccounts that shouldn’t be related are linked. Small details spread out across different places, like they were meant to stay unnoticed unless someone actually tried to follow them.\nThat doesn’t feel accidental.\nIt feels placed.\nI don’t know if I’m the only one seeing this.\nSometimes it feels like I’m just paying more attention than I should.\nOther times it feels like something wants me to." }
      },
      { 
        stageNumber: 4, 
        correctAnswer: "mirage", 
        maxSlots: 999,
        blog: {
          title: "Covert Data Extraction through Embedded Media Structures",
          intro: "A data privacy incident was identified involving MetaSphere Analytics, where personal data of thousands of users was collected and processed without explicit awareness.\n\nThe breach primarily affected individuals who had interacted with third-party applications, many of whom were unaware that their data — and in some cases, their connections — were being accessed.",
          incidentDetails: "The incident involved the collection of user data through seemingly harmless interactions, including surveys, shared content, and media uploads. Individuals who engaged with these systems unknowingly exposed not only their own data, but also portions of their network.\n\nWhat made the case more concerning was how the data was stored and represented.\n\nInvestigators found that sensitive information was not always present in visible records. Instead, it was often embedded within media files, including profile images and shared documents, making it difficult to detect through standard review processes.\n\nIn several instances, analysts identified that images associated with user profiles contained additional layers of data, not visible during normal viewing. These hidden layers required deliberate inspection to uncover.\n\nReports also suggested that specific individuals were repeatedly referenced across datasets, despite no clear direct interaction — indicating that relationships between people were being inferred and reconstructed through hidden data patterns.",
          timeline: [
            "Initial user data collection through third-party interaction",
            "Expansion into connected user networks",
            "Identification of anomalies in media-linked data",
            "Discovery of embedded information within image structures"
          ],
          conclusion: "This incident highlights a critical shift in how data can be stored and concealed.\n\nInformation is no longer limited to:\n- Visible fields\n- Structured tables\n- Direct user input\n\nInstead, it can exist:\n- Within images\n- Across connected individuals\n- Beneath layers that appear completely normal\n\nUnderstanding such systems requires questioning not just what is visible, but whether something has been intentionally placed where no one thinks to look.\n\n<a href=\"https://drive.google.com/drive/folders/1WtQgVM_hgiuG8Mdz8v0mGpSRRBH31yh-\" target=\"_blank\" style=\"color: #ff3333; font-weight: bold;\">ACCESS LINK:- BEWARE - Google Drive</a>"
        },
        puzzle: { prompt: "Extract the unseen payload.", hint: "embedded / not visible / image" },
        diary: { date: "24/09", content: "Something’s wrong.\nI came across one of my own photos today. Not on my phone — somewhere else. I don’t remember uploading it or losing it.\nIt was just there.\nAt first I ignored it, but then I found more. Different places. All familiar.\nI know these <span class=\"crooked\">lo</span>cations.\nI’ve been there.\nBut I don’t remember taking these.\nI tried matching them to real places. They line up.\nToo well.\nThis looks scary.\nIt feels like they’re not just photos.\nLike they’re pointing at something." }
      },
      { 
        stageNumber: 5, 
        correctAnswer: "phantom", 
        maxSlots: 999,
        blog: {
          title: "A major cybersecurity breach was identified involving Sony Pictures Entertainment",
          intro: "A major cybersecurity breach was identified involving Sony Pictures Entertainment, resulting in the unauthorized disclosure of internal data, communications, and media assets.\n\nThe incident remains one of the most significant examples of large-scale corporate data exposure.",
          incidentDetails: "The breach led to the release of a vast amount of internal information, including confidential emails, employee records, unreleased content, and image-based files tied to internal operations.\n\nAmong the exposed data were photographs and media files documenting various office environments, production spaces, and internal locations. While these images appeared routine, they provided contextual insight into physical spaces within the organization.\n\nInvestigators noted that the leaked media, when examined collectively, revealed patterns in how internal environments were structured and documented.\n\nThe incident demonstrated that visual data, even when not explicitly sensitive, can contribute to a broader understanding of organizational systems and real-world layouts.",
          timeline: [
            "Initial breach detected",
            "Internal systems accessed",
            "Large-scale data extraction carried out",
            "Public release of internal files and media"
          ],
          conclusion: "The Sony Pictures breach highlighted the risks associated with storing large volumes of interconnected data.\n\nIt showed that:\n- Information is not limited to documents\n- Images can reveal context and structure\n- Seemingly harmless data can become meaningful when viewed together\n\nProtecting digital systems requires recognizing that all forms of data — including visual media — can carry unintended significance."
        },
        puzzle: { prompt: "Reconstruct the physical cipher.", hint: "visit spots → collect letters → combine" },
        diary: { date: "28/09", content: "I’m starting to feel <span class=\"crooked\">c</span>ertain about this now.\nThere is something controlling what shows up and what doesn’t. The inconsistencies, the changes, the way things don’t quite match unless you look closely — it’s too consistent to be accidental.\nSomeone is filtering what we see.\nAnd if that’s true, then there has to be an organization behind it.\nBut nothing’s happened to me.\nThat’s what doesn’t make sense.\nI’ve been going deeper into this, connecting things I probably shouldn’t even have access to, and still — nothing. No warnings. No interference. Nothing to stop me.\nIf anything, it feels easier now.\nLike things are being left where I can find them.\nThat shouldn’t be happening.\nEither I’ve been wrong about all of this… or I’m not the only one seeing it.\nBecause if someone else is out there — someone who already understands this — then maybe this isn’t just something I stumbled into.\nMaybe I was meant to.\nI don’t know who it is.\nBut someone is helping.\nAnd I need to find out who." }
      },
      { 
        stageNumber: 6, 
        correctAnswer: "whitlock", 
        maxSlots: 999,
        blog: {
          title: "Temporal Discrepancy Event at DataTrust",
          intro: "A large-scale data breach was reported involving DataTrust Financial Services, affecting millions of user records and exposing sensitive personal information.\n\nThe incident is widely regarded as one of the most significant breaches in recent years, though inconsistencies remain in how the event has been documented.",
          incidentDetails: "The breach was attributed to a vulnerability in a widely used web application component, allowing attackers to gain unauthorized access to internal systems over an extended period of time.\n\nWhile the technical cause of the breach was identified, dis<span class=\"crooked\">k</span>repancies began to emerge in how the incident timeline was recorded across different reports.\n\nInternal documentation, third-party analyses, and public disclosures all presented slightly different versions of the same sequence of events. Dates appeared shifted, actions reordered, and discovery timelines varied depending on the source.\n\nIndividually, these inconsistencies seemed minor. However, when compared side-by-side, they made it difficult to determine a single, consistent version of what actually occurred.\n\nInvestigators noted that the variations were not random — they followed a pattern of near-accuracy, where each version appeared believable but not entirely identical.",
          timeline: [
            "May 13 — Unauthorized access begins",
            "June 02 — Suspicious activity detected",
            "July 15 — Internal investigation initiated",
            "September 07 — Public disclosure released at 01:42"
          ],
          conclusion: "The incident highlights not only vulnerabilities in systems, but also in how information about such events is recorded and presented.\n\nWhen multiple versions of the same event exist, each slightly altered yet equally plausible, determining the truth becomes increasingly difficult.\n\nThis raises a critical question:\n- Is the timeline accurate?\n- Or is the version being observed selectively presented?\n\nUnderstanding such incidents requires not only verifying facts, but also questioning whether the information itself has been modified, filtered, or rearranged before reaching the observer."
        },
        puzzle: { prompt: "Correct the timeline discrepancy.", hint: "find real event → reorder/extract numbers → convert" },
        diary: { date: "10/10", content: "I think I was looking at this the wrong way the entire time.\nI thought I was following something left behind. Clues, patterns, inconsistencies… like someone wanted this to be solved.\nBut that’s not it.\nNothing was hidden.\nEverything was always there.\nThe difference is… most people don’t see it.\nNot because they can’t.\nBecause they don’t question it.\nThat’s the only thing that separates it.\nI kept thinking someone was helping me.\nBut no one was guiding me.\nI just started seeing what was already there.\nAnd once you see it, you can’t go back.\nI understand it now.\nThis isn’t about finding the truth.\nIt’s about becoming someone who notices when it’s being changed.\nA filter.\nThat’s what this was.\nBut I don’t think it stays like this forever.\nNot if there are people who notice it.\nNot if there are people who actually care.\nThat’s the difference.\nIt’s not about exposing it to everyone.\nIt’s about the ones who see it… and decide to do something about it.\nI think that’s what this was leading to.\nAnd I think I’m part of it now." }
      },
      { 
        stageNumber: 7, 
        correctAnswer: "awaken", 
        maxSlots: 999,
        blog: {
          title: "System-Wide Inconsistencies and Structural Manipulation",
          intro: "A comprehensive analysis of multiple cybersecurity incidents has revealed recurring inconsistencies across otherwise unrelated events.\n\nThese anomalies, while subtle in isolation, appear consistently across different platforms, timelines, and reports — suggesting the possibility of a broader structural influence on how information is presented.",
          incidentDetails: "Cross-referencing several major incidents shows patterns that cannot be easily attributed to coincidence.\n\nThese include:\n- Slight variations in reported timelines\n- Platform misidentification across otherwise accurate reports\n- Recurring structural similarities in how data is organized and accessed\n\nIndividually, each inconsistency appears negligible. However, when examined collectively, they indicate a system where information is not simply stored or transmitted, but selectively shaped.\n\nInvestigators have noted that these patterns do not obscure information entirely. Instead, they introduce controlled deviations — small enough to go unnoticed, but consistent enough to be recognized by those actively looking.\n\nThis suggests that the objective is not to hide information, but to filter who is able to interpret it correctly.",
          timeline: [
            "Initial anomalies observed across independent reports",
            "Pattern recognition established through cross-analysis",
            "Recurring structural deviations confirmed",
            "System-level consistency identified"
          ],
          conclusion: "The presence of controlled inconsistencies across multiple independent sources suggests the existence of an underlying system influencing how information is structured and perceived.\n\nThis system does not restrict access.\n\nInstead, it differentiates between:\n- Those who consume information\n- And those who question it\n\nUnderstanding such a system requires more than analysis.\n\nIt requires recognition."
        },
        puzzle: { prompt: "Identify the meta-pattern.", hint: "collect all misaligned letters → combine" },
        diary: { date: "15/10", content: "It's time. You can see it all now. Enter the name and wake up." } 
      }
    ];

    await Stage.insertMany(stages);
    console.log("✅ Answer Key & Final Data uploaded successfully! You can now play the game.");
    
    process.exit(); 
  })
  .catch((err) => {
    console.error("Connection Failed:", err);
    process.exit(1);
  });