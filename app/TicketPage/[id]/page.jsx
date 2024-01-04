import TicketForm from "@/app/(components)/TicketForm";

// Get Tickets by Id.
const getTicketById = async (id) => {
  const res = await fetch(
    `https://ticket-app-xi-seven.vercel.app/api/Tickets${id}`,
    {
      cache: "no-store",
    }
  );

  if (!res.ok) {
    throw new Error("Failed to get ticket.");
  }

  return res.json();
};

// TicketPage
const TicketPage = async ({ params }) => {
  const EDITMODE = params.id === "new" ? false : true;
  let updateTicketData = {};

  if (EDITMODE) {
    updateTicketData = await getTicketById(params.id, { cache: "no-store" });
    updateTicketData = updateTicketData.foundTicket;
  } else {
    updateTicketData = {
      _id: "new",
    };
  }
  return (
    <div>
      <TicketForm ticket={updateTicketData} />
    </div>
  );
};

export default TicketPage;
