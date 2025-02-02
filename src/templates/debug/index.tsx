import React from 'react';
import { Footer } from '../homepage/Footer';
import { QuickLinks } from '../error/QuickLinks';
import { Title } from './Title';
import Table from './Table';
import { Error } from './Error';
interface ISerializationErrorProps {
  blameUrl: string;
  errors: {
    line?: number;
    column?: number;
    message?: string;
    start?: number;
    end?: number;
    src?: string;
    leftOver?: string;
  }[];
  repoData;
  configData;
  warningData;
  statusCode;
}
// details, config,errors,warnings
export function Debug({
  repoData,
  configData,
  errors,
  warningData,
  statusCode,
}: ISerializationErrorProps): JSX.Element {
  const tablesData = [repoData, configData, warningData];

  return (
    <>
      <section className="py-16 lg:py-32 text-center lg:text-left">
        <Title statusCode={statusCode} />
        <div>
          <p>
            This page is to assist in debugging any errors we encounter when building your
            documentation. Navigate between the different files we found in your repo on the left.
          </p>
          <p>
            Below we provide debug information about the specific page. Use the sidebar on the right
            for quick navigation.
          </p>
        </div>
        {tablesData.map(table => (
          <article className="mt-6 border p-1" id={table.id} key={table.id}>
            <Table header={table.header} data={table.data} />
          </article>
        ))}
        <article className="mt-6 border rounded p-1" id="errors">
          <Table header="Errors" data={[]} />
          {errors.map((e, i) => (
            <Error {...e} key={i} />
          ))}
        </article>
        <section className="mt-20 max-w-4xl mx-auto px-2">
          <QuickLinks />
        </section>
        <Footer />
      </section>
    </>
  );
}
