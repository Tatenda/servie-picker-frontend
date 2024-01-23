'use client';
import ProjectCard from "@/components/shared/projectCard.component";
import { Card, CardBody, Select, SelectItem, Tab, Tabs } from "@nextui-org/react";
import { useState } from "react";

const MainPage = () => {
    const [selected, setSelected] = useState("photos");
    const [divisions] = useState(
        [
            { label: "Marketing", value: "marketing" },
            { label: "Sales", value: "sales" },
            { label: "Engineering", value: "engineering" },
            { label: "Human Resources", value: "human-resources" },
        ]
    );

    return <div className="p-8">
        <div className="flex justify-center mb-8">
            <Select
                color="primary"
                label="Favorite Animal"
                placeholder="Select an animal"
                defaultSelectedKeys={["cat"]}
                className="max-w-xs"
                size="lg"
            >
                {divisions.map((animal) => (
                    <SelectItem key={animal.value} value={animal.value}>
                        {animal.label}
                    </SelectItem>
                ))}
            </Select>

        </div>
        <Tabs
            aria-label="Options"
            selectedKey={selected}
            onSelectionChange={(e) => setSelected(e as string)}
            size="lg"
        >
            <Tab key="internal" title="Internal">
                <div className="grid grid-cols-5 gap-8 mt-4">
                    <ProjectCard />
                    <ProjectCard />
                    <ProjectCard />
                    <ProjectCard />
                    <ProjectCard />
                    <ProjectCard />
                </div>
            </Tab>
            <Tab key="external" title="External">
                <div className="grid grid-cols-5 gap-8 mt-4">
                    <ProjectCard />
                    <ProjectCard />
                    <ProjectCard />
                    <ProjectCard />
                    <ProjectCard />
                    <ProjectCard />
                </div>
            </Tab>

        </Tabs>
    </div>
}

export default MainPage;
