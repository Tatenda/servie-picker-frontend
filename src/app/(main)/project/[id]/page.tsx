import { Button } from "@nextui-org/react";

const ProjectByIdPage = ({ params, searchParams }: any) => {
    console.log(
        'ProjectByIdPage',
        'params',
        params,
        'searchParams',
        searchParams
    );

    return (
        <div>
            <p>Project page by ID {params.id}</p>
            <div className="my-5 grid gap-4 grid-cols-4 lg:grid-cols-8">
                <Button color="primary" variant="ghost">
                    Primary
                </Button>
                <Button color="secondary" variant="ghost">
                    Secondary
                </Button>
                <Button color="success" variant="ghost">
                    Success
                </Button>
                <Button color="warning" variant="ghost">
                    Warning
                </Button>
                <Button color="danger" variant="ghost">
                    Danger
                </Button>

            </div>

            <div className="grid gap-4 grid-cols-8">
                <Button color="primary">
                    Primary
                </Button>
                <Button color="secondary">
                    Secondary
                </Button>
                <Button color="success">
                    Success
                </Button>
                <Button color="warning">
                    Warning
                </Button>
                <Button color="danger">
                    Danger
                </Button>
            </div>
            <div className="my-5 grid gap-4 grid-cols-8">
                <Button color="primary" variant="faded">
                    Primary
                </Button>
                <Button color="secondary" variant="faded">
                    Secondary
                </Button>
                <Button color="success" variant="faded">
                    Success
                </Button>
                <Button color="warning" variant="faded">
                    Warning
                </Button>
                <Button color="danger" variant="faded">
                    Danger
                </Button>
            </div>
            <div className="my-5 grid gap-4 grid-cols-8">
                <Button color="primary" variant="bordered">
                    Primary
                </Button>
                <Button color="secondary" variant="bordered">
                    Secondary
                </Button>
                <Button color="success" variant="bordered">
                    Success
                </Button>
                <Button color="warning" variant="bordered">
                    Warning
                </Button>
                <Button color="danger" variant="bordered">
                    Danger
                </Button>
            </div>
            <div className="my-5 grid gap-4 grid-cols-8">
                <Button color="primary" variant="light">
                    Primary
                </Button>
                <Button color="secondary" variant="light">
                    Secondary
                </Button>
                <Button color="success" variant="light">
                    Success
                </Button>
                <Button color="warning" variant="light">
                    Warning
                </Button>
                <Button color="danger" variant="light">
                    Danger
                </Button>

            </div>
            <div className="my-5 grid gap-4 grid-cols-8">
                <Button color="primary" variant="flat">
                    Primary
                </Button>
                <Button color="secondary" variant="flat">
                    Secondary
                </Button>
                <Button color="success" variant="flat">
                    Success
                </Button>
                <Button color="warning" variant="flat">
                    Warning
                </Button>
                <Button color="danger" variant="flat">
                    Danger
                </Button>

            </div>
            <div className="my-5 grid gap-4 grid-cols-8">
                <Button color="primary" variant="shadow">
                    Primary
                </Button>
                <Button color="secondary" variant="shadow">
                    Secondary
                </Button>
                <Button color="success" variant="shadow">
                    Success
                </Button>
                <Button color="warning" variant="shadow">
                    Warning
                </Button>
                <Button color="danger" variant="shadow">
                    Danger
                </Button>
            </div>
        </div>
    )
}

export default ProjectByIdPage
