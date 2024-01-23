'use client';
import { Card, CardHeader, Divider, CardBody, CardFooter, Link, Image, Chip, Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button } from "@nextui-org/react"
import { useState } from "react";
import { TfiTime } from "react-icons/tfi";
import { TfiSettings } from "react-icons/tfi";

const ProjectCard = () => {
    const [selectedKeys, setSelectedKeys] = useState("text");
    return <Card className="p-4" >
        <CardHeader className="flex gap-3">
            <Image
                alt="nextui logo"
                height={40}
                radius="sm"
                src="https://avatars.githubusercontent.com/u/86160567?s=200&v=4"
                width={40}
            />
            <div className="flex flex-col">
                <p className="text-md">Case Link Rebuild</p>
                <p className="text-small text-default-500">Life Assist</p>
            </div>
            <div className="flex justify-end flex-1">
                <Dropdown>
                    <DropdownTrigger>

                        <Button
                            variant="flat"
                            className="capitalize"
                            isIconOnly
                        >
                            <TfiSettings size={16} />
                        </Button>
                    </DropdownTrigger>
                    <DropdownMenu
                        aria-label="Single selection example"
                        variant="flat"
                        disallowEmptySelection
                        onSelectionChange={(e) => setSelectedKeys(e as string)}
                    >
                        <DropdownItem key="view">View</DropdownItem>
                        <DropdownItem key="edit">Edit</DropdownItem>
                    </DropdownMenu>
                </Dropdown>
            </div>
        </CardHeader>
        {/* <Divider /> */}
        <CardBody className="my-3" >
            <p>Rebuild of the Case Link Web App. Project includes designing a Mobile App</p>
        </CardBody>
        {/* <Divider /> */}
        <CardFooter className="grid grid-cols-2">
            <div><Chip color="warning" variant="dot">Awaiting Sign-Off</Chip></div>
            <div className="grid justify-items-end w-full"> <Chip
                startContent={<TfiTime size={16} />}
                variant="flat"
                color="success"
            >
                25-05-2024
            </Chip></div>
        </CardFooter>
    </Card>
}

export default ProjectCard;
