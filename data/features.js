// Seven Playlab features, each with 3 levels (Spark → Grow → Master),
// example apps (embedded previews), and learn resources.
window.FEATURES = [
  {
    id: 'adaptive-memory',
    name: 'Adaptive Memory',
    tagline: 'Let your app remember what matters about each learner.',
    blurb:
      'Adaptive Memory captures details that emerge during conversations so your app can respond with context over time — think tutoring that remembers which fractions a student struggled with last week.',
    icon: 'memory',
    garden: { plant: 'Oak', color: '#6b8e4e' },
    lab: { symbol: 'Mm', atomicHint: '01', color: '#7c6df2' },
    playground: { structure: 'swing', color: '#ef8d3c' },
    levels: [
      {
        name: 'Spark',
        title: 'Turn on memory for a tutor app',
        brief:
          'Enable Adaptive Memory on an existing tutor app and write three memory instructions that capture learning progress, difficult concepts, and preferred explanation style.',
        steps: [
          'Open an existing tutor app in Builder mode.',
          'Toggle Adaptive Memory on in App Settings.',
          'Write 3 memory instructions focused on learning state, not personal info.',
          'Test with two different learner personas and check the memory panel.'
        ],
        estMinutes: 15
      },
      {
        name: 'Grow',
        title: 'Use memory to personalize practice',
        brief:
          'Make the app surface its memory in its responses — referencing prior topics, adjusting difficulty, and suggesting what to work on next.',
        steps: [
          'Add workflow steps that instruct the AI to consult its memory before responding.',
          'Introduce a "what should we work on?" opener that pulls from stored struggles.',
          'Have the app propose next-step practice based on memory, not just the prompt.',
          'Run a 3-session roleplay; confirm memory evolves across sessions.'
        ],
        estMinutes: 30
      },
      {
        name: 'Master',
        title: 'Ship a memory-aware coaching app',
        brief:
          'Publish a coaching app where memory drives the whole experience: welcome messages adapt, guardrails protect private info, and you can explain to students what is remembered.',
        steps: [
          'Layer memory + user profiles so static + dynamic context combine.',
          'Write a welcome message that adapts based on memory.',
          'Add guardrails explicitly preventing storage of PII.',
          'Publish and pilot with 3+ learners; review the memory panel weekly.'
        ],
        estMinutes: 60
      }
    ],
    exampleApps: [
      { name: 'Essay Coach', author: 'Ms. Navarro · AP Lang', url: 'https://www.playlab.ai/', preview: 'chat', msgs: [
        { role: 'ai', text: "Welcome back, Jordan. Last time we worked on trimming filler in your intro. Want to continue there, or bring a new draft?" },
        { role: 'u',  text: 'New draft — same prompt though.' },
        { role: 'ai', text: 'Great. I\'ll keep an eye on the filler pattern we spotted (\"in today\'s society\", \"very unique\") while we read.' }
      ]},
      { name: 'Fractions Tutor', author: 'Mr. Kim · Grade 5', url: 'https://www.playlab.ai/', preview: 'chat', msgs: [
        { role: 'ai', text: 'Hi Priya! You told me denominators were tricky last time. Want a warm-up before we try word problems?' },
        { role: 'u',  text: 'sure' },
        { role: 'ai', text: 'Here\'s one: 2/3 + 1/6. Take your time.' }
      ]}
    ],
    learn: [
      { title: 'Adaptive Memory feature guide', url: 'https://learn.playlab.ai/features/Adaptive%20Memory' },
      { title: 'User Profiles (complements memory)', url: 'https://learn.playlab.ai/features/User%20Profiles' }
    ]
  },
  {
    id: 'image-io',
    name: 'Image Input & Generation',
    tagline: 'Bring pictures into the conversation — both directions.',
    blurb:
      'Let learners upload photos of their work and let your app respond with generated imagery: diagrams, illustrations, visual feedback annotated right on what they shared.',
    icon: 'image',
    garden: { plant: 'Sunflower', color: '#e9a23b' },
    lab: { symbol: 'Ig', atomicHint: '02', color: '#3bb6d6' },
    playground: { structure: 'slide', color: '#ffd23f' },
    levels: [
      {
        name: 'Spark',
        title: 'Accept an image and describe it',
        brief:
          'Enable image input on your app and have it describe or classify what the learner uploaded.',
        steps: [
          'Turn on image input in App Settings.',
          'Write a starter prompt asking learners to share a photo.',
          'Have the AI describe what it sees in plain language.',
          'Test with a handwritten note, a diagram, and a photo.'
        ],
        estMinutes: 15
      },
      {
        name: 'Grow',
        title: 'Give feedback on student work from a photo',
        brief:
          'Treat uploaded images as artifacts to assess: a math worksheet, a lab drawing, a piece of art. Return structured feedback.',
        steps: [
          'Add a rubric reference to the app.',
          'Have the AI identify elements in the image before scoring.',
          'Return feedback with "what works / what to try next".',
          'Include a generated sketch or diagram that illustrates the suggestion.'
        ],
        estMinutes: 45
      },
      {
        name: 'Master',
        title: 'Visual-first storytelling app',
        brief:
          'Publish an app where images drive the whole loop — learners upload, the app responds with generated visuals, and the conversation builds a shared artifact.',
        steps: [
          'Design a turn-taking prompt: learner image → AI generated image → learner response.',
          'Use memory so the visual thread is remembered.',
          'Add guardrails around generated imagery for age-appropriate output.',
          'Pilot with one class; export the generated artifacts.'
        ],
        estMinutes: 90
      }
    ],
    exampleApps: [
      { name: 'Sketch-to-Concept', author: 'Ms. Liu · Bio', url: 'https://www.playlab.ai/', preview: 'image', caption: 'Upload your cell diagram — get an annotated version back.' },
      { name: 'Art Critique Buddy', author: 'Mr. Osei · Studio', url: 'https://www.playlab.ai/', preview: 'image', caption: 'Shares composition notes on photos of student paintings.' }
    ],
    learn: [
      { title: 'Feature Documentation overview', url: 'https://learn.playlab.ai/features/Overview' },
      { title: 'Camera Handwriting Input (related)', url: 'https://learn.playlab.ai/features/Camera%20Handwriting%20Input' }
    ]
  },
  {
    id: 'voice-input',
    name: 'Voice Input',
    tagline: 'Let learners talk to your app instead of type.',
    blurb:
      'Voice input opens the door for younger learners, multilingual classrooms, and students with writing-heavy fatigue. Pair it with voice output for full conversation.',
    icon: 'voice',
    garden: { plant: 'Foxglove', color: '#b96cc4' },
    lab: { symbol: 'Vo', atomicHint: '03', color: '#e25c78' },
    playground: { structure: 'merrygoround', color: '#ff6b6b' },
    levels: [
      {
        name: 'Spark',
        title: 'Enable voice input on a discussion app',
        brief:
          'Turn on voice input for a Socratic discussion app and test it with three different accents.',
        steps: [
          'Enable voice input in App Settings.',
          'Add a starter prompt inviting spoken responses.',
          'Record three test sessions with different voices.',
          'Note where transcription falters and add a fallback.'
        ],
        estMinutes: 15
      },
      {
        name: 'Grow',
        title: 'Build a language-practice partner',
        brief:
          'Combine voice input with voice output so a learner can practice conversation in a target language.',
        steps: [
          'Turn on both voice input and voice output.',
          'Pick a target language + level (A2, B1, etc.) in the prompt.',
          'Have the AI correct pronunciation gently and rephrase.',
          'Add a "recap" step at the end of each session.'
        ],
        estMinutes: 45
      },
      {
        name: 'Master',
        title: 'Accessible oral-exam rehearsal',
        brief:
          'Publish an accessibility-first app: voice-in, voice-out, adjustable pace, and a written transcript for review.',
        steps: [
          'Design for WCAG-friendly interaction patterns.',
          'Let learners choose speech rate and a preferred voice.',
          'Store transcripts so learners can review between sessions.',
          'Pilot with an ELL class and collect feedback.'
        ],
        estMinutes: 75
      }
    ],
    exampleApps: [
      { name: 'Socratic Circle', author: 'Mr. Patel · Humanities', url: 'https://www.playlab.ai/', preview: 'voice', caption: '"Why does the narrator trust the stranger? …"' },
      { name: 'Spanish Cafe', author: 'Ms. Ortiz · Level 2', url: 'https://www.playlab.ai/', preview: 'voice', caption: '"Hola Mateo, ¿qué pediste para almorzar?"' }
    ],
    learn: [
      { title: 'Voice Inputs', url: 'https://learn.playlab.ai/features/Voice%20Input' },
      { title: 'Voice Output', url: 'https://learn.playlab.ai/features/Voice%20Output' },
      { title: 'Voice Dictation Guide', url: 'https://learn.playlab.ai/features/Using%20Dictation' }
    ]
  },
  {
    id: 'doc-editor',
    name: 'Document Editor',
    tagline: 'Co-write with learners inside the app.',
    blurb:
      'The Document Editor turns your app from a chat into a side-by-side workspace: a draft on the left, feedback and revision suggestions on the right. Ideal for writing instruction.',
    icon: 'doc',
    garden: { plant: 'Fern', color: '#4a7c5a' },
    lab: { symbol: 'De', atomicHint: '04', color: '#2a9d8f' },
    playground: { structure: 'climbnet', color: '#c89a6a' },
    levels: [
      {
        name: 'Spark',
        title: 'Draft + feedback side-by-side',
        brief:
          'Enable the Document Editor and have the AI respond in the chat while the learner revises in the doc.',
        steps: [
          'Turn on Document Editor for your app.',
          'Seed the doc with a starter paragraph.',
          'Have the AI review changes as the learner types.',
          'Pilot with 2 students and collect their reactions.'
        ],
        estMinutes: 20
      },
      {
        name: 'Grow',
        title: 'Rubric-based revision coach',
        brief:
          'Attach a rubric, have the app highlight issues in the draft and suggest targeted revisions.',
        steps: [
          'Upload the rubric as a reference.',
          'Prompt the AI to map feedback to rubric criteria.',
          'Offer "accept / try again / explain more" choices per suggestion.',
          'Track revisions through the activity log.'
        ],
        estMinutes: 45
      },
      {
        name: 'Master',
        title: 'Multi-stage writing workshop',
        brief:
          'Publish a full workshop flow: brainstorm → draft → peer-like feedback → revision → reflection, all inside one document.',
        steps: [
          'Design a 4-stage workflow with clear transitions.',
          'Add adaptive memory so the coach remembers prior essays.',
          'Include a student-facing reflection step at the end.',
          'Ship it; run with a full class.'
        ],
        estMinutes: 90
      }
    ],
    exampleApps: [
      { name: 'Thesis Sharpener', author: 'Ms. Chen · AP Lit', url: 'https://www.playlab.ai/', preview: 'doc', caption: 'Draft on the left, rubric-aligned notes on the right.' },
      { name: 'Lab Report Coach', author: 'Mr. Okafor · Chem', url: 'https://www.playlab.ai/', preview: 'doc', caption: 'Walks students from claim → evidence → reasoning.' }
    ],
    learn: [
      { title: 'Doc Editor', url: 'https://learn.playlab.ai/features/Doc%20Editor' },
      { title: 'Avoid Answer Generation', url: 'https://learn.playlab.ai/features/Avoid%20Answer%20Generation' }
    ]
  },
  {
    id: 'python',
    name: 'Python',
    tagline: 'Give your app real computation.',
    blurb:
      'The MCP Python tool lets your app run Python: plot graphs, simulate data, check student code, compute exact answers. Great for STEM apps that need more than LLM arithmetic.',
    icon: 'python',
    garden: { plant: 'Bamboo', color: '#52a06d' },
    lab: { symbol: 'Py', atomicHint: '05', color: '#306998' },
    playground: { structure: 'climber', color: '#306998' },
    levels: [
      {
        name: 'Spark',
        title: 'Run your first Python in an app',
        brief:
          'Enable the MCP Python tool and have the AI use it to compute an answer the LLM would otherwise guess at.',
        steps: [
          'Enable the MCP Python tool in your app.',
          'Ask a question with a known tricky numeric answer.',
          'Instruct the AI to verify with Python.',
          'Compare to a run without Python to feel the difference.'
        ],
        estMinutes: 20
      },
      {
        name: 'Grow',
        title: 'Plot and explain',
        brief:
          'Build an app that plots a function or a dataset and walks the student through what the plot shows.',
        steps: [
          'Add a reference dataset or formula.',
          'Have Python generate the plot, AI narrate it.',
          'Let students tweak parameters and re-plot.',
          'Add a reflection prompt at the end.'
        ],
        estMinutes: 45
      },
      {
        name: 'Master',
        title: 'Code-review mentor',
        brief:
          'Publish an app that reviews learner Python code: runs it, diagnoses failures, suggests targeted fixes, and celebrates progress.',
        steps: [
          'Accept code via paste and execute safely.',
          'Have AI read the traceback and explain, not just fix.',
          'Offer tiered hints instead of full answers.',
          'Keep memory of common pitfalls per learner.'
        ],
        estMinutes: 90
      }
    ],
    exampleApps: [
      { name: 'Graph It', author: 'Ms. Rhodes · Algebra II', url: 'https://www.playlab.ai/', preview: 'python', caption: 'plt.plot(x, np.sin(x)) — narrated.' },
      { name: 'Traceback Tutor', author: 'Mr. Daniels · CS1', url: 'https://www.playlab.ai/', preview: 'python', caption: 'Pastes stacktraces, hints before answers.' }
    ],
    learn: [
      { title: 'MCP Python Tool', url: 'https://learn.playlab.ai/features/MCP%20Python%20Tool' },
      { title: 'Model Context Protocol (MCP)', url: 'https://learn.playlab.ai/features/Model%20Context%20Protocol%20%28MCP%29' }
    ]
  },
  {
    id: 'conversation-review',
    name: 'Conversation Review',
    tagline: 'See how your app actually behaves in the wild.',
    blurb:
      'Review real learner conversations, flag surprising moments, and turn that data into instruction changes. The feedback loop that turns a prototype into a dependable tool.',
    icon: 'review',
    garden: { plant: 'Ivy', color: '#5c8b5a' },
    lab: { symbol: 'Cv', atomicHint: '06', color: '#b58900' },
    playground: { structure: 'seesaw', color: '#9f7bea' },
    levels: [
      {
        name: 'Spark',
        title: 'Read five real conversations',
        brief:
          'Open the Activity tab, read five published-app conversations, and jot three observations per conversation.',
        steps: [
          'Open Activity on a published app.',
          'Read five different conversations end-to-end.',
          'Note: 1 thing the AI did well, 1 miss, 1 surprise.',
          'Share observations with a colleague.'
        ],
        estMinutes: 20
      },
      {
        name: 'Grow',
        title: 'Turn reviews into instruction updates',
        brief:
          'Identify a recurring miss across conversations, adjust your prompt, re-test, and document the change.',
        steps: [
          'Pick a single recurring issue.',
          'Hypothesize the prompt change that addresses it.',
          'Fork a conversation from the flawed moment and re-test.',
          'Publish the update; log what changed.'
        ],
        estMinutes: 45
      },
      {
        name: 'Master',
        title: 'Establish a weekly review ritual',
        brief:
          'Bake review into your workflow: a weekly pass over activity, a simple rubric for triage, and a shareable changelog.',
        steps: [
          'Define a triage rubric (safety, accuracy, tone, scope).',
          'Sample 10 conversations per week per app.',
          'Maintain a changelog of prompt edits and reasons.',
          'Invite a second educator into the review loop.'
        ],
        estMinutes: 60
      }
    ],
    exampleApps: [
      { name: 'Essay Coach (reviewed)', author: 'Ms. Navarro', url: 'https://www.playlab.ai/', preview: 'review', caption: '12 sessions · 2 flagged · 1 prompt update this week.' },
      { name: 'Office Hours Bot', author: 'Mr. Greene', url: 'https://www.playlab.ai/', preview: 'review', caption: '34 sessions · 0 flagged · tone rubric 4.7/5.' }
    ],
    learn: [
      { title: 'Individual App Activity Review', url: 'https://learn.playlab.ai/features/Individual%20App%20Activity%20Review' },
      { title: 'Forking Conversations', url: 'https://learn.playlab.ai/features/forking%20conversations' },
      { title: 'Escalating Flagged Conversations', url: 'https://learn.playlab.ai/features/Escalating%20Flagged%20Conversations%20Guide' }
    ]
  },
  {
    id: 'references',
    name: 'References & Knowledge',
    tagline: 'Ground your app in curriculum you trust.',
    blurb:
      'Attach curriculum, standards, and trusted sources so your app answers from your community\'s materials — not the open internet.',
    icon: 'book',
    garden: { plant: 'Willow', color: '#7a9e6f' },
    lab: { symbol: 'Rf', atomicHint: '07', color: '#d97757' },
    playground: { structure: 'treehouse', color: '#d97757' },
    levels: [
      {
        name: 'Spark',
        title: 'Attach your first reference',
        brief:
          'Upload a single unit plan or article and have your app answer a question using only that material.',
        steps: [
          'Upload a reference document to the app.',
          'Ask a question whose answer lives in it.',
          'Instruct the AI to cite the reference.',
          'Compare to the same question without the reference.'
        ],
        estMinutes: 15
      },
      {
        name: 'Grow',
        title: 'Build a workspace reference library',
        brief:
          'Organize shared references across apps so your whole department pulls from the same source of truth.',
        steps: [
          'Create a workspace library for your subject area.',
          'Upload 5–10 trusted materials, tagged.',
          'Pin the most-used references.',
          'Swap your apps over to the shared library.'
        ],
        estMinutes: 45
      },
      {
        name: 'Master',
        title: 'Curriculum-aligned tutor',
        brief:
          'Wire up a Knowledge Graph tool (e.g. state standards or Illustrative Math) so your tutor stays faithful to a full curriculum.',
        steps: [
          'Enable a Knowledge Graph tool on your app.',
          'Prompt the AI to ground explanations in unit context.',
          'Test across 3 grade levels / 3 units.',
          'Pilot with colleagues teaching the same curriculum.'
        ],
        estMinutes: 75
      }
    ],
    exampleApps: [
      { name: 'IM Grade 7 Tutor', author: 'Ms. Tiruchelvam', url: 'https://www.playlab.ai/', preview: 'refs', caption: 'Grounded in Illustrative Math Grade 7 units.' },
      { name: 'Dept. Writing Rubric Coach', author: 'English Dept.', url: 'https://www.playlab.ai/', preview: 'refs', caption: 'Shared rubric + exemplars across 12 apps.' }
    ],
    learn: [
      { title: 'Workspace Reference Library Guide', url: 'https://learn.playlab.ai/features/Workspace%20Reference%20Library%20Guide' },
      { title: 'Knowledge Graph Tools', url: 'https://learn.playlab.ai/features/Knowledge%20Graph%20Tools' },
      { title: 'Illustrative Mathematics Guide', url: 'https://learn.playlab.ai/features/Building%20with%20Illustrative%20Mathematics' }
    ]
  }
];
