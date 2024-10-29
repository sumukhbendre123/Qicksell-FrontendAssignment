// cardData.js
import projectPlanningImage from '../assets/project_planning.jpg'; // replace with actual path
import designMeetingImage from '../assets/design_meeting.jpg'; // replace with actual path
import backendDevelopmentImage from '../assets/backend_development.jpg'; // replace with actual path
import clientReviewImage from '../assets/client_review.jpg'; // replace with actual path
import codeRefactoringImage from '../assets/code_refactoring.jpg'; // replace with actual path

const cardData = [
    {
        id: "1",
        title: "Project Planning",
        tag: ["Urgent", "Development"],
        status: "In Progress",
        imageUrl: projectPlanningImage,
    },
    {
        id: "2",
        title: "Design Meeting",
        tag: ["High Priority", "Design"],
        status: "Scheduled",
        imageUrl: designMeetingImage,
    },
    {
        id: "3",
        title: "Backend Development",
        tag: ["Medium Priority", "Backend"],
        status: "Completed",
        imageUrl: backendDevelopmentImage,
    },
    {
        id: "4",
        title: "Client Review",
        tag: ["Review", "Client"],
        status: "Pending",
        imageUrl: clientReviewImage,
    },
    {
        id: "5",
        title: "Code Refactoring",
        tag: ["Low Priority", "Cleanup"],
        status: "In Progress",
        imageUrl: codeRefactoringImage,
    },
];

export default cardData;
