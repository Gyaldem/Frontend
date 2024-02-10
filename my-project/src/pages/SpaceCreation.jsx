/* eslint-disable react/prop-types */
import NavMentor from "../components/NavMentor";

function SpaceCreation({ row, col }) {
    const generateEquipes = () => {
        const equipes = [];
        for (let i = 0; i < row; i++) {
            const rowEquipes = [];
            for (let j = 0; j < col; j++) {
                const equipeNum = i * col + j + 1;
                rowEquipes.push(
                    <div className="mx-4 float-end">
                        <div key={equipeNum} className="flex items-center justify-center w-20 h-20 text-center rounded-2xl bg-first">
                            Team{equipeNum}
                        </div>
                    </div>
                );
            }
            equipes.push(
                <div key={i} className="flex my-4">
                    {rowEquipes}
                </div>
            );

        }

        return equipes;
    };

    return (
        <div>
            <NavMentor />
            <span className="px-10"> Mentor's Space </span>
            <div className="flex content-center justify-center">
                <div className="mt-4 ">
                    {generateEquipes()}
                </div>
            </div>
        </div>
    );
}

export default SpaceCreation;
