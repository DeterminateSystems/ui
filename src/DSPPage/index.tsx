"use client";

import clsx from "clsx";

import "./index.scss";
import { TableCell, TableHead, TableHeader, TableRow } from "../Table";
import type { Severity } from "../SeverityBadge";
import SeverityBadge from "../SeverityBadge";
import DSPStatusBadge from "../DSPStatusBadge";
import Badges from "../Badges";
import type { VulnerabilityPropertiesProps } from "../VulnerabilityProperties";

export type Status =
  | "Identified"
  | "Affected"
  | "Not affected"
  | "Waiting"
  | "Fixed"
  | "Ignored";

export interface DSAVuln {
  dsa_id: string;
  title: string;
  severity: Severity;
  status: Status;
  last_update: Date;
  properties: VulnerabilityPropertiesProps;
}

export function DSATableHead() {
  return (
    <TableHead>
      <TableRow>
        <TableHeader>DSA ID</TableHeader>
        <TableHeader>CVE ID</TableHeader>
        <TableHeader>Title</TableHeader>
        <TableHeader>Severity</TableHeader>
        <TableHeader>Status</TableHeader>
        <TableHeader>Last update</TableHeader>
      </TableRow>
    </TableHead>
  );
}

export function DSAId({ id, className }: { id: string; className?: string }) {
  return <code className={clsx("dsa-id", className)}>{id}</code>;
}

export function PackageName({ name }: { name: string }) {
  return <code>{name}</code>;
}

export function CVEIds({ ids }: { ids: string[] }) {
  return (
    <>
      {ids.flatMap((id, index) => [
        index > 0 && ", ",
        <code key={id}>{id}</code>,
      ])}
    </>
  );
}

export function DSATableRow({ vuln }: { vuln: DSAVuln }) {
  return (
    <TableRow key={vuln.dsa_id}>
      <TableCell>
        <DSAId id={vuln.dsa_id} />
      </TableCell>
      <TableCell>
        <CVEIds ids={vuln.properties.cve_ids ?? []} />
      </TableCell>
      <TableCell>
        <PackageName name={vuln.title} />
      </TableCell>
      <TableCell>
        <SeverityBadge severity={vuln.severity} />
      </TableCell>
      <TableCell>
        <DSPStatusBadge status={vuln.status} />
      </TableCell>
      <TableCell>{vuln.last_update.toString()}</TableCell>
    </TableRow>
  );
}

export function formatTimestamp(
  date: Date | string | number,
  locale = "en-US",
) {
  const d = date instanceof Date ? date : new Date(date);

  return new Intl.DateTimeFormat(locale, {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "2-digit",
    second: "2-digit",
    timeZoneName: "short",
  }).format(d);
}

export function LastUpdated({ date }: { date: Date }) {
  return (
    <div className="last-updated">
      <span className="last-updated--prefix">Updated at </span>
      <span className="last-updated--date">{formatTimestamp(date)}</span>
      <span className="last-updated--suffix">.</span>
    </div>
  );
}

export function DSAHeader({ vuln }: { vuln: DSAVuln }) {
  return (
    <div className="dsa-header">
      <div className="dsa-header__reference">
        <DSAId id={vuln.dsa_id} className="dsa-header__dsa-id" />
        <Badges>
          <SeverityBadge severity={vuln.severity} />
          <DSPStatusBadge status={vuln.status} />
        </Badges>
      </div>

      <h1 className="dsa-header__title">{vuln.title}</h1>
    </div>
    /*
    <TableRow key={vuln.dsa_id}>
      <TableCell></TableCell>
      <TableCell><CVEIds ids={vuln.cve_ids} /></TableCell>
      <TableCell></TableCell>
      <TableCell></TableCell>
      <TableCell></TableCell>
      <TableCell>{vuln.last_update.toString()}</TableCell>
    </TableRow>
    */
  );
}
