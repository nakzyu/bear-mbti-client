import type { NextPage } from "next";
import { SinglePageContent } from "../../styles/components";
import TestComponent from "../../components/test";
import { useRouter } from "next/router";

const QuestionPage: NextPage = () => {
  const router = useRouter();

  return (
    <SinglePageContent>
      <TestComponent router={router} />
    </SinglePageContent>
  );
};

export default QuestionPage;
