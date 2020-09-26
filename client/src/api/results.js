export async function fetchResults() {
  try {
    const response = await fetch("/api/offer/", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const results = await response.json();
    console.log(results[0]);
    return results;
  } catch (error) {
    alert(error.message);
    return null;
  }
}

export async function fetchOffer() {
  const mockedResult = {
    id: 1,
    title: "12 frische Bananen",
    category: "fruits",
    tags: ["vegan", "vegetarisch", "laktosefrei", "glutenfrei"],
    location: {
      name: "Papa",
      street: "Musterstraße 12",
      zip: "50968",
      city: "Köln",
    },
    date: "15.08.2020",
    time: "15:00 - 16:00",
  };
  return mockedResult;
}

export async function fetchReservations(userId) {
  const mockedResults = [
    {
      id: 1,
      title: "Bananen",
      category: "fruits",
      city: "50968 Köln",
      date: "15.08.2020",
      time: "15:00 - 16:00",
    },
    {
      id: 2,
      title: "Joghurt",
      category: "milk",
      city: "50968 Köln",
      date: "15.08.2020",
      time: "14:00 - 15:00",
    },
    {
      id: 3,
      title: "Baguette",
      category: "bread",
      city: "50968 Köln",
      date: "15.08.2020",
      time: "14:00 - 15:00",
    },
  ];
  return mockedResults;
}
export async function fetchOffers(userId) {
  const mockedResults = [
    {
      id: 2,
      title: "Joghurt",
      category: "milk",
      city: "50968 Köln",
      date: "15.08.2020",
      time: "14:00 - 15:00",
    },
    {
      id: 3,
      title: "Baguette",
      category: "bread",
      city: "50968 Köln",
      date: "15.08.2020",
      time: "14:00 - 15:00",
    },
  ];
  return mockedResults;
}
