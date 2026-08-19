{
  type Participant = {
    name: string;
    role: string;
  };

  interface Event {
    date: Date;
    title: string;
    participants: Participant[];
  }

  const event1: Event = {
    date: new Date(),
    title: "TypeScript Workshop",
    participants: [
      {
        name: "Miru",
        role: "Student",
      },
    ],
  };

  console.log(event1);
}

{
  interface Participant {
    name: string;
    role: string;
  }

  type Event = {
    date: Date;
    title: string;
    participants: Participant[];
  };

  const event2: Event = {
    date: new Date(),
    title: "TypeScript Workshop",
    participants: [
      {
        name: "Miru",
        role: "Student",
      },
    ],
  };

  console.log(event2);
}