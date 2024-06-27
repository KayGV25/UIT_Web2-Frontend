import { Sidebar } from "flowbite-react";
import { HiArrowSmRight, HiChartPie, HiInbox, HiShoppingBag, HiTable, HiUser } from "react-icons/hi";

export default function MSidebar({
    isVisible
}){
    return(
        <>
            <Sidebar aria-label="Sidebar with multi-level dropdown" className={`drop-shadow-lg ${isVisible ? "visible" : "invisible"} fixed top-16`}>
                <Sidebar.Items>
                    <Sidebar.ItemGroup>
                    <Sidebar.Collapse icon={HiShoppingBag} label="MEAL">
                        <Sidebar.Item href="#">Beakfast</Sidebar.Item>
                        <Sidebar.Item href="#">Lunch</Sidebar.Item>
                        <Sidebar.Item href="#">Dinner</Sidebar.Item>
                        <Sidebar.Item href="#">Dessert</Sidebar.Item>
                        <Sidebar.Item href="#" className="hover:underline underline-offset-4 text-white">View all</Sidebar.Item>
                    </Sidebar.Collapse>
                    <Sidebar.Collapse icon={HiShoppingBag} label="INGREDIENT">
                        <Sidebar.Item href="#">Chicken</Sidebar.Item>
                        <Sidebar.Item href="#">Beef</Sidebar.Item>
                        <Sidebar.Item href="#">Pork</Sidebar.Item>
                        <Sidebar.Item href="#">Seafood</Sidebar.Item>
                        <Sidebar.Item href="#">Pasta</Sidebar.Item>
                        <Sidebar.Item href="#">Vegetable</Sidebar.Item>
                        <Sidebar.Item href="#" className="hover:underline underline-offset-4 text-white">View all</Sidebar.Item>
                    </Sidebar.Collapse>
                    <Sidebar.Collapse icon={HiShoppingBag} label="CUISINES">
                        <Sidebar.Item href="#">Vietnamese</Sidebar.Item>
                        <Sidebar.Item href="#">Mexican</Sidebar.Item>
                        <Sidebar.Item href="#">Thais</Sidebar.Item>
                        <Sidebar.Item href="#">French</Sidebar.Item>
                        <Sidebar.Item href="#">Chinese</Sidebar.Item>
                        <Sidebar.Item href="#" className="hover:underline underline-offset-4 text-white">View all</Sidebar.Item>
                    </Sidebar.Collapse>
                    <Sidebar.Item href="#" icon={HiChartPie}>
                        About Us
                    </Sidebar.Item>
                    </Sidebar.ItemGroup>
                </Sidebar.Items>
            </Sidebar>
        </>
    )
}