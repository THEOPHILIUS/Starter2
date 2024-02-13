import Link from "next/link";
import MailIcons from "./MailIcons";


export const data = [
    {
      id : 1,
      title: "Meeting Agenda",
      time: "01/11/2023",
      sender: "John Doe",
      content: [
        "Paragraph 1: Discussing quarterly sales performance.",
        "Paragraph 2: Reviewing marketing strategies for the upcoming campaign.",
       
      ]
    },
    {
      id : 2,
      title: "Project Update",
      time: "02/15/2023",
      sender: "Jane Smith",
      content: [
        " Providing progress report on Project X.",
        " Highlighting challenges faced and solutions implemented."
      ]
    },
    {
      id : 3,
      title: "Weekly Report",
      time: "02/15/2023",
      sender: "Will Smith",
      content: [
        " Providing progress report on Project X.",
        " Highlighting challenges faced and solutions implemented."
      ]
    },
    {
        id : 4,
        title: "Weekly Newsletter",
        time: "02/15/2023",
        sender: "Marketing Team",
        content: [
          "Hello everyone,",
          "Here's your weekly update on company news and events:",
          "1. Employee of the Month: Congratulations to Sarah Johnson for being nominated as Employee of the Month for her outstanding performance and dedication.",
          "2. Upcoming Events: Don't forget about the company-wide picnic this Saturday at 12:00 PM in the park. Please RSVP by Thursday if you plan to attend.",
          "3. New Product Launch: Our new product line is set to launch next month. Stay tuned for more details!",
          "Have a great week!",
          "The Marketing Team"
        ]
      }
    // Add more objects as needed to reach 20
  ];
  
 
  

export default function Main() {

    const fullData = data.map((datum) => (
    <section key={datum.id} className="py-3 border ">
        <Link href={`/inbox/${datum.title.split(' ').join('-').toLowerCase()}`} className="flex space-x-4 items-center">
            <MailIcons/>

    <h2 className="w-1/5">{datum.sender}</h2>

    <h2>{(datum.title + '- ' + datum.content[0]).length >= 40 ? (datum.title + '- ' + datum.content[0]).slice(0,60)+ '...' : datum.title+datum.content[0]}</h2>
        </Link>
    </section>

    ))
  
  
  return (
    <div>
        {fullData}
    </div>
  )
}