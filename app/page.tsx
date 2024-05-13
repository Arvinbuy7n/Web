'use client';

import { DragFromOutsideLayout } from '@/components/grid/DropDrag';
import Header from '@/components/header';

export default function Home() {
  return (
    <main className="h-[300vh] w-full dark:bg-[#090c10] bg-[#F6F2F2] ">
      <Header />
      <div className="max-w-[1250px] mx-auto">
        <DragFromOutsideLayout />
      </div>
    </main>
  );
}
