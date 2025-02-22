import css from './FrequentlyAskedQues.module.css';
import CollapsableCard2 from '../../../utils/Cards/CollapsableCard2/CollapsableCard2'

let FrequentlyAskedQues = () => {
    return <div className={css.outerDiv}>
        <div className={css.innerDiv}>
            <div className={css.title}>Frequently asked questions</div>
            <div className={css.cards}>
            <CollapsableCard2 title="What will Zomato charge me for creating a page on its platform?" content="Creating a restaurant page on Zomato is free of cost. You can maintain your page by replying to reviews and do a lot more without any charges." />
            <CollapsableCard2 title="How can I list my restaurant on Zomato?" content="You can list your restaurant by signing up on Zomato for Business, providing the necessary details, and submitting your listing for approval." />
            <CollapsableCard2 title="How do I update my restaurant details on Zomato?" content="Log in to your Zomato for Business account, go to the 'Edit Profile' section, and update the required details such as menu, hours, or location." />
            <CollapsableCard2 title="Does Zomato charge for delivery services?" content="Zomato charges a commission fee on each order placed through its platform, but the exact fee depends on your agreement with Zomato." />
            <CollapsableCard2 title="How can customers review my restaurant on Zomato?" content="Customers can leave reviews directly on your restaurant's Zomato page by signing into their Zomato account." />
            <CollapsableCard2 title="How can I respond to reviews on my Zomato page?" content="After logging into your Zomato for Business account, you can respond to customer reviews through the 'Reviews' section on your dashboard." />
            <CollapsableCard2 title="What should I do if my restaurant's information is incorrect on Zomato?" content="You can claim your restaurant's page on Zomato and edit the incorrect details through your Zomato for Business profile." />
            <CollapsableCard2 title="How do I partner with Zomato for food delivery?" content="You can partner with Zomato by registering your restaurant on Zomato for Business and opting for the food delivery service during the onboarding process." />
            <CollapsableCard2 title="Can I advertise my restaurant on Zomato?" content="Yes, Zomato offers various advertising solutions to help you promote your restaurant. You can explore options like banner ads, priority listings, and sponsored results." />
            <CollapsableCard2 title="How do I check my restaurant’s performance on Zomato?" content="Zomato for Business provides analytics tools where you can track page visits, order volumes, and customer engagement statistics." />
            <CollapsableCard2 title="How long does it take for my restaurant to go live on Zomato after listing?" content="Typically, it takes 5-7 business days for your restaurant to be reviewed and listed on Zomato after submitting all required details." />
            <CollapsableCard2 title="Does Zomato provide support for restaurant partners?" content="Yes, Zomato offers 24/7 support for its restaurant partners through phone, email, and the Zomato for Business portal." />
            <CollapsableCard2 title="Can I pause my Zomato delivery services temporarily?" content="Yes, you can temporarily pause delivery services by updating your restaurant's operational status in the Zomato for Business dashboard." />
            <CollapsableCard2 title="Is there a mobile app for Zomato restaurant partners?" content="Yes, Zomato provides the 'Zomato Partner' app, allowing restaurant owners to manage orders, track performance, and communicate with customers on the go." />

            </div>
        </div>
    </div>
}

export default FrequentlyAskedQues;