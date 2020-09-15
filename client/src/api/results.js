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
      category: "fruits",
      location: "50968 Köln",
      pickup_date: "15.08.2020",
      pickup_time: "15:00 - 16:00",
    },
    {
      id: 2,
      title: "Joghurt",
      category: "milk",
      location: "50968 Köln",
      pickup_date: "15.08.2020",
      pickup_time: "14:00 - 15:00",
    },
    {
      id: 3,
      title: "Baguette",
      category: "bread",
      location: "50968 Köln",
      pickup_date: "15.08.2020",
      pickup_time: "14:00 - 15:00",
    },
    {
      id: 4,
      title: "Haxe",
      category: "meat",
      location: "50968 Köln",
      pickup_date: "15.08.2020",
      pickup_time: "14:00 - 15:00",
    },
    {
      id: 5,
      title: "Joghurt",
      category: "milch",
      location: "50968 Köln",
      pickup_date: "15.08.2020",
      pickup_time: "14:00 - 15:00",
    },
    {
      id: 6,
      title: "Joghurt",
      category: "milch",
      location: "50968 Köln",
      pickup_date: "15.08.2020",
      pickup_time: "14:00 - 15:00",
    },
    {
      id: 7,
      title: "Joghurt",
      category: "milch",
      location: "50968 Köln",
      pickup_date: "15.08.2020",
      pickup_time: "14:00 - 15:00",
    },
    {
      id: 8,
      title: "Joghurt",
      category: "milch",
      location: "50968 Köln",
      pickup_date: "15.08.2020",
      pickup_time: "14:00 - 15:00",
    },
  ];
  return mockedResults;
}
