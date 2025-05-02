
export const sessions = [
  {
    id: 1,
    title: "Session 1",
    components: [
      {
        id: "learning",
        title: "Learning Module",
        type: "main" as const
      },
      {
        id: "tutorial",
        title: "Live Tutorial",
        type: "main" as const
      },
      {
        id: "assessment",
        title: "Assessments",
        type: "main" as const
      },
      {
        id: "references",
        title: "References",
        type: "main" as const,
        subComponents: [
          {
            id: "preread",
            title: "Pre-Session References",
            type: "sub" as const
          },
          {
            id: "postread",
            title: "Post-Session References",
            type: "sub" as const
          },
          {
            id: "todos",
            title: "To-Dos",
            type: "sub" as const
          }
        ]
      }
    ]
  },
  {
    id: 2,
    title: "Session 2",
    components: [
      {
        id: "learning2",
        title: "Learning Module",
        type: "main" as const
      },
      {
        id: "tutorial2",
        title: "Live Tutorial",
        type: "main" as const
      },
      {
        id: "assessment2",
        title: "Assessments",
        type: "main" as const
      },
      {
        id: "references2",
        title: "References",
        type: "main" as const,
        subComponents: [
          {
            id: "preread2",
            title: "Pre-Session References",
            type: "sub" as const
          },
          {
            id: "postread2",
            title: "Post-Session References",
            type: "sub" as const
          },
          {
            id: "todos2",
            title: "To-Dos",
            type: "sub" as const
          }
        ]
      }
    ]
  },
  {
    id: 3,
    title: "Session 3",
    components: [
      {
        id: "learning3",
        title: "Learning Module",
        type: "main" as const
      },
      {
        id: "tutorial3",
        title: "Live Tutorial",
        type: "main" as const
      },
      {
        id: "assessment3",
        title: "Assessments",
        type: "main" as const
      },
      {
        id: "references3",
        title: "References",
        type: "main" as const,
        subComponents: [
          {
            id: "preread3",
            title: "Pre-Session References",
            type: "sub" as const
          },
          {
            id: "postread3",
            title: "Post-Session References",
            type: "sub" as const
          },
          {
            id: "todos3",
            title: "To-Dos",
            type: "sub" as const
          }
        ]
      }
    ]
  }
];
