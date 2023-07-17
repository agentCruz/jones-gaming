import Countdown from "@/components/Countdown";
import { usePlayerProvider } from "@/components/provider/player.provider";
import { GetStaticPropsContext, InferGetStaticPropsType } from "next";

export async function getStaticProps({ }: GetStaticPropsContext) {
    return {
        props: {},
    };
}

export default function Counter({ }: InferGetStaticPropsType<
    typeof getStaticProps
>) {
    const { currentState_ } = usePlayerProvider() || {};

    return (
        <div className={"container"} style={{ width: "100%" }}>
            {
                currentState_ && currentState_.countdownParams && (
                    <>
                        <Countdown targetDate={new Date(currentState_.countdownParams.targetDate)} user={currentState_.countdownParams.user} />
                    </>
                )
            }
        </div>
    );
}
