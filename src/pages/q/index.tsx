import type { NextPage } from "next";
import { useRouter } from "next/router";

import TestComponent from "../../components/test";
import { SinglePageContent } from "../../styles/components";

const QuestionPage: NextPage = () => {
  const router = useRouter();

  return (
    <SinglePageContent>
      <TestComponent router={router} />
    </SinglePageContent>
  );
};

export default QuestionPage;
