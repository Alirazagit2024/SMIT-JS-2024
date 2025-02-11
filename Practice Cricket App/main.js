async function getCricketData(searchQuery = "") {
  const apiKey = "5ad6f8c1-1db0-43c5-876b-bed064ee362d";
  const apiUrl = `https://api.cricapi.com/v1/cricScore?apikey=${apiKey}${
    searchQuery ? `&search=${encodeURIComponent(searchQuery)}` : ""
  }`;

  const card = document.querySelector(".cards");
  card.innerHTML = `<div id="loader" class="loader"></div>`;

  try {
    const response = await fetch(apiUrl).then((res) => res.json());
    // console.log(response);

    if (response.data && Array.isArray(response.data)) {
      const filteredMatches = response.data.filter(
        (elem) => elem.status && elem.status !== "Not started"
      );

      if (filteredMatches.length === 0) {
        card.innerHTML = `<p class="text-white text-center mt-4">No matches have started yet.</p>`;
        return;
      }

      card.innerHTML = "";

      filteredMatches.forEach((elem) => {
        const matchDate = new Date(elem.dateTimeGMT);
        const options = {
          timeZone: "Asia/Karachi",
          day: "2-digit",
          month: "2-digit",
          year: "numeric",
          hour: "2-digit",
          minute: "2-digit",
          hour12: true,
        };
        const formattedDate = matchDate.toLocaleString("en-PK", options);

        const match = `
          <div class="w-full sm:w-[48%] lg:w-[30%] bg-gradient-to-r from-gray-800 to-gray-700 cursor-pointer p-6 rounded-lg border border-black hover:from-gray-700 hover:to-gray-800 shadow hover:shadow-lg hover:border-white transition">
            <div class="text-center">
              <p class="mb-4 text-lg font-bold text-green-400">Match: ${
                elem.ms
              }</p>
            </div>
            <div class="flex items-center justify-between">
              <div class="text-center">
                <img src="${elem.t1img}" alt="${
          elem.t1
        }" class="w-16 h-16 mx-auto rounded-full mb-2 border-2 border-white">
                <h3 class="text-lg font-semibold text-white">${elem.t1}</h3>
                <p class="text-sm text-gray-300">${elem.t1s || "N/A"}</p>
              </div>
              <p class="text-xl font-bold text-white">VS</p>
              <div class="text-center">
                <img src="${elem.t2img}" alt="${
          elem.t2
        }" class="w-16 h-16 mx-auto rounded-full mb-2 border-2 border-white">
                <h3 class="text-lg font-semibold text-white">${elem.t2}</h3>
                <p class="text-sm text-gray-300">${elem.t2s || "N/A"}</p>
              </div>
            </div>
            <div class="mt-6 text-center">
              <p class="text-sm text-gray-400">📅 Date: ${formattedDate}</p>
              <p class="mt-2 text-md text-gray-200">🏏 Match Type: ${
                elem.matchType
              }</p>
              <p class="mt-1 text-md text-gray-200">🌍 Series: ${
                elem.series
              }</p>
              <p class="mt-4 text-lg font-bold text-green-400">✔ ${
                elem.status
              }</p>
            </div>
          </div>`;

        card.innerHTML += match;
      });
    } else {
      card.innerHTML = `<p class="text-white text-center mt-4">No data found in API response.</p>`;
    }
  } catch (error) {
    console.error("Error fetching data:", error);
    card.innerHTML = `<p class="text-red-500 text-center mt-4">Failed to load matches. Please try again later.</p>`;
  }
}
const search = document
  .querySelector(".search")
  .addEventListener("click", function () {
    const input = document.querySelector(".input").value.trim();
    getCricketData(input);
    document.querySelector(".input").value = "";
  });

getCricketData();
