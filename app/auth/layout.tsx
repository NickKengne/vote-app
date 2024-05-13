import React, { Suspense } from "react";

export default function layout({
  children,
}:any) {
  return <Suspense fallback={<Loading />}>{children}</Suspense>;
}

 const Loading = () => {
  return (
    <div>
      <svg className="animate-spin h-5 w-5 mr-3 ..." viewBox="0 0 24 24"></svg>
    </div>
  );
};
