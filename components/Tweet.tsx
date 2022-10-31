import { Tweet } from "../typings";

interface Props {
    tweet: Tweet;
}

function Tweet({ tweet }: Props) {
    return <div>Tweet</div>;
}

export default Tweet;
