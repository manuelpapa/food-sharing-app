export async function fetchAvailableOffers() {
  try {
    const response = await fetch("/api/offers/available", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const results = await response.json();
    return results;
  } catch (error) {
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
    return result[0];
  } catch (error) {
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
    return null;
  }
}

export async function fetchReservations() {
  try {
    const response = await fetch("/api/user/reservations", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const result = await response.json();
    return result;
  } catch (error) {
    return null;
  }
}

export async function fetchOffers() {
  try {
    const response = await fetch("/api/user/offers", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const result = await response.json();
    return result;
  } catch (error) {
    return null;
  }
}

// Create Offer
export async function createOffer(
  data,
  formattedDate,
  start_time,
  end_time,
  tags
) {
  try {
    const request = {
      title: data.title,
      category: data.category,
      location: {
        name: data.name,
        street: data.street,
        city: data.city,
        zip: data.zip,
      },
      start_time: start_time,
      end_time: end_time,
      date: formattedDate,
      tags: tags,
    };
    const response = await fetch("/api/offers/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(request),
    });
    const result = await response.text();
    return result;
  } catch (error) {
    return null;
  }
}
