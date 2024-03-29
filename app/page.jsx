import TicketCard from "./(components)/TicketCard";

const getTickets = async () => {
  try {
    const res = await fetch(
      "https://ticket-app-xi-seven.vercel.app/api/Tickets",
      {
        cache: "no-store",
      }
    );
    return res.json();
  } catch (error) {
    console.log("Failed to get tickets", error);
  }
};

const Dashboard = async () => {
  const { tickets } = await getTickets();
  const uniqueCategories = [
    ...new Set(tickets?.map(({ category }) => category)),
  ];

  return (
    <div className="p-5">
      <div>
        {tickets ? (
          uniqueCategories?.map((uniqueCategory, categoryIndex) => (
            <div key={categoryIndex} className="my-4">
              <h2>{uniqueCategory}</h2>
              <div className="lg:grid grid-cols-2 xl:grid-cols-4">
                {tickets
                  .filter((ticket) => ticket.category === uniqueCategory)
                  .map((filteredTicket, _index) => (
                    <TicketCard
                      id={_index}
                      key={_index}
                      ticket={filteredTicket}
                    />
                  ))}
              </div>
            </div>
          ))
        ) : (
          <h2 className="text-default-text">
            No Tickets Available. Please create a Ticket.
          </h2>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
