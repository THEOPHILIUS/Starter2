import Link from 'next/link';
import MailIcons from './MailIcons';
import React from 'react'

export const data = [
    {
      id: 1,
      title: "Meeting Reminder",
      time: "01/11/2023",
      sender: "John Doe",
      content: [
        "Just a reminder about our meeting tomorrow at 10:00 AM.",
        "We'll be discussing the upcoming project and assigning tasks.",
        "Looking forward to your contributions!",
        "Best regards, John"
      ]
    },
    {
      id: 2,
      title: "Happy Birthday!",
      time: "01/11/2023",
      sender: "Jane Smith",
      content: [
          "Wishing you a fantastic birthday filled with joy and laughter!",
          "May this year bring you success and happiness in abundance.",
        "Enjoy your special day to the fullest!",
        "Warmest wishes, Jane"
      ]
    },
    {
      id: 3,
      title: "Project Update",
      time: "01/11/2023",
      sender: "Alice Johnson",
      content: [
        "I wanted to provide a quick update on the progress of our project.",
        "We've successfully completed the initial phase and are moving ahead on schedule.",
        "If you have any questions, feel free to reach out.",
        "Thanks, Alice"
      ]
    },
    {
      id: 4,
      title: "Important Announcement",
      time: "01/11/2023",
      sender: "Bob Williams",
      content: [
        "I have an important announcement to share regarding the upcoming company event.",
        "Please make sure to check your emails for detailed information.",
        "Your cooperation is highly appreciated.",
        "Best regards, Bob"
      ]
    },
    {
      id: 5,
      title: "Weekend Plans",
      time: "01/11/2023",
      sender: "Emily Davis",
      content: [
        "As we approach the weekend, I wanted to check if anyone has plans or suggestions for a team outing.",
        "Feel free to share your ideas, and let's make the weekend memorable!",
        "Cheers, Emily"
      ]
    },
    {
      id: 6,
      title: "Feedback Request",
      time: "01/11/2023",
      sender: "Alex Turner",
      content: [
        "I would like to gather your feedback on the recent training sessions.",
        "Your input is valuable and will help us improve our future programs.",
        "Please take a few minutes to share your thoughts.",
        "Thank you, Alex"
    ]
},
{
      id: 7,
      title: "Upcoming Deadline",
      time: "01/11/2023",
      sender: "Sophie Miller",
      content: [
        "Just a reminder that the deadline for submitting project proposals is approaching.",
        "Make sure to finalize and submit your proposals by the end of this week.",
        "If you need any assistance, feel free to reach out.",
        "Best regards, Sophie"
    ]
    },
    {
      id: 8,
      title: "Team Appreciation",
      time: "01/11/2023",
      sender: "David Harris",
      content: [
        "I want to express my appreciation for the excellent teamwork demonstrated during the recent project.",
        "Your collaboration and dedication have contributed significantly to our success.",
        "Thank you for your hard work!",
        "Sincerely, David"
    ]
}
];


export default function Main() {

    const fullData = data.map((datum) => (
        <section key={datum.id} className='py-3'>
            <Link href={`/inbox/${datum.title.split(' ').join('-').toLowerCase()}`} className="flex space-x-4 items-center">
            <MailIcons />    

             <h2 className='w-1/5'>{datum.sender}</h2>


             <h2>{(datum.title +'-'+ datum.content[1]).length >= 40 ? (datum.title +'-'+ datum.content[0]).slice(0,60)+ '...' : datum.title+datum.content[0]}</h2>
            </Link>
        </section>
    ))


  return (
    <div>
        {fullData}
    </div>
  )
}