import { Sidebar } from "flowbite-react";
import { HiChartPie, HiShoppingBag } from "react-icons/hi";

export default function MSidebar({isVisible}){
    function handleSearch(data,type){
        window.location.href = `/search?${type}=${data}`;
    }
    return(
        <>
            <Sidebar aria-label="Sidebar with multi-level dropdown" className={`drop-shadow-lg ${isVisible ? "visible" : "invisible"} fixed top-16 z-10`}>
                <Sidebar.Items>
                    <Sidebar.ItemGroup>
                    <Sidebar.Collapse icon={HiShoppingBag} label="MEAL">
                        <Sidebar.Item href="/search?tag=Beakfast">Beakfast</Sidebar.Item>
                        <Sidebar.Item href="/search?tag=Lunch">Lunch</Sidebar.Item>
                        <Sidebar.Item href="/search?tag=Dinner">Dinner</Sidebar.Item>
                        <Sidebar.Item href="/search?tag=Dessert">Dessert</Sidebar.Item>
                    </Sidebar.Collapse>
                    <Sidebar.Collapse icon={HiShoppingBag} label="INGREDIENT">
                        <Sidebar.Item href="/search?ingredients=Chicken">Chicken</Sidebar.Item>
                        <Sidebar.Item href="/search?ingredients=Beef">Beef</Sidebar.Item>
                        <Sidebar.Item href="/search?ingredients=Pork">Pork</Sidebar.Item>
                        <Sidebar.Item href="/search?ingredients=Seafood">Seafood</Sidebar.Item>
                        <Sidebar.Item href="/search?ingredients=Pasta">Pasta</Sidebar.Item>
                        <Sidebar.Item href="/search?ingredients=Vegetable">Vegetable</Sidebar.Item>
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