export async function fetchResults() {
  // TODO: Connect API here later
  /*
  const response = await fetch("localhost:3001/app/offers", {
    header: {
      //TODO:
    },
  });*/

  //const result = await response.json();

  const mockedResults = [
    {
      id: 1,
      title: "5 Bananen",
      category: "obst",
      location: "50968 Köln",
      pickup_date: "15.08.2020",
      pickup_time: "15:00 - 16:00",
    },
    {
      id: 1,
      title: "Joghurt",
      category: "milch",
      location: "50968 Köln",
      pickup_date: "15.08.2020",
      pickup_time: "14:00 - 15:00",
    },
    {
      id: 1,
      title: "Joghurt",
      category: "milch",
      location: "50968 Köln",
      pickup_date: "15.08.2020",
      pickup_time: "14:00 - 15:00",
    },
    {
      id: 1,
      title: "Joghurt",
      category: "milch",
      location: "50968 Köln",
      pickup_date: "15.08.2020",
      pickup_time: "14:00 - 15:00",
    },
    {
      id: 1,
      title: "Joghurt",
      category: "milch",
      location: "50968 Köln",
      pickup_date: "15.08.2020",
      pickup_time: "14:00 - 15:00",
    },
  ];
  return mockedResults;
}
