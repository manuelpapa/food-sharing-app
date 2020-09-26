export async function fetchAvailableOffers() {
  try {
    const response = await fetch("/api/offers/available", {
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

export async function fetchOffer(offerId) {
  try {
    const response = await fetch(`/api/offers/${offerId}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const result = await response.json();
    console.log(result[0]);
    return result[0];
  } catch (error) {
    alert(error.message);
    return null;
  }
}

// Update offer with reserved_by user_id
export async function reserveOffer(offerId) {
  try {
    const response = await fetch(`/api/offers/${offerId}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const result = await response.json();
    return result;
  } catch (error) {
    alert(error.message);
    return null;
  }
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
