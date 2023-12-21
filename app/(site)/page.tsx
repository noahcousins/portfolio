import {
  getSession,
  getSubscription,
  getActiveProductsWithPrices
} from '@/app/supabase-server';
import Pricing from '@/components/Pricing';
import { Badge } from '@/components/ui/badge';
import { revalidatePath } from 'next/cache';

import GridSection from '@/components/sections/GridSection';

export const metadata = {
  title: 'UAPoli',
  description:
    'A bipartisan congressional outreach platform advocating for UAP disclosure.'
};

export default async function Home() {
  const [session, products, subscription] = await Promise.all([
    getSession(),
    getActiveProductsWithPrices(),
    getSubscription()
  ]);

  return (
    <div className={'mx-auto flex max-w-2xl flex-col space-y-12 px-4 xl:px-0'}>
      <div className="flex w-full justify-between">
        <h1 className="text-5xl font-normal">
          What's poppin, <br /> I'm <span className="font-bold">Noah</span>{' '}
        </h1>
        <div className="h-24 w-24 rounded-full bg-primary/5"></div>
      </div>

      <p className="text-xl font-light">
        I'm a music producer who needed to learn how to code. <br />{' '}
        <span className="font-bold">So I learned how to code.</span>
      </p>

      <div className="flex flex-col gap-4">
        {' '}
        <div className="scale-100 rounded-2xl bg-white/5 p-4 transition-transform duration-200 ease-in-out hover:scale-105">
          <p className="text-sm font-light uppercase text-primary/80">2015</p>
          <p className="">
            I taught myself basic HTML and CSS making websites to sell my music.
          </p>
        </div>
        <div className="scale-100 rounded-2xl bg-white/5 p-4 transition-transform duration-200 ease-in-out hover:scale-105">
          <p className="text-sm font-light uppercase text-primary/80">2018</p>
          <p className="">
            I reinforced those skills with a web development elective while
            obtaining my{' '}
            <span className="font-bold">
              Bachelors in Science of Communications
            </span>{' '}
            with a focus in <span className="font-bold">Audio Engineering</span>
            .
          </p>
        </div>
        <div className="scale-100 rounded-2xl bg-white/5 p-4 transition-transform duration-200 ease-in-out hover:scale-105">
          <p className="text-sm font-light uppercase text-primary/80">2022</p>
          <p className="">
            From a desire to learn how to build complex web apps, I learned{' '}
            <span className="font-bold">React</span> and{' '}
            <span className="font-bold">Next.js</span>. I used Udemy and
            FreeCodeCamp to learn.
          </p>
        </div>
        <div className="scale-100 rounded-2xl bg-white/5 p-4 transition-transform duration-200 ease-in-out hover:scale-105">
          <p className="text-sm font-light uppercase text-primary/80">2023</p>
          <p className="">
            I built <span className="font-bold">Drumify</span>,{' '}
            <span className="font-bold">soundbit</span>, and{' '}
            <span className="font-bold">UAPoli</span>.
          </p>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <h2 className="text-3xl font-bold">Projects</h2>
      </div>
    </div>
  );
}
