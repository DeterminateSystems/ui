import type { Meta, StoryObj } from "@storybook/react";
import {
  DSAHeader,
  DSATableHead,
  DSATableRow,
  LastUpdated,
  type DSAVuln,
} from "./";
import { Table, TableBody } from "../Table";
import PageLayout from "../PageLayout";
import Header from "../Header";
import DetSysIcon from "../DetSysIcon";
import ColorSchemeToggle from "../ColorSchemeToggle";
import { Placeholder } from "../Placeholder";
import Navigation from "../Navigation";
import VulnerabilityProperties from "../VulnerabilityProperties";
import Markdown from "../Markdown";

const meta: Meta<typeof Table> = {
  title: "Template/DSPPage",
  component: Table,
  parameters: {
    layout: "padded",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Table>;

const single: DSAVuln = {
  dsa_id: "DSA-4355-a46b1-9d34",
  severity: "Important",
  status: "Fixed",
  title: "Security update for imagemagick",
  last_update: new Date(Date.now() - 238_476_234_234),

  properties: {
    vectors: [
      {
        note: "DetSys",
        vector: "CVSS:3.1/AV:L/AC:L/PR:N/UI:N/S:U/C:H/I:H/A:H",
      },
      {
        note: "NVD",
        vector: "CVSS:3.1/AV:L/AC:L/PR:N/UI:N/S:U/C:H/I:H/A:H",
      },
    ],
    cve_ids: ["CVE-2024-12345", "CVE-2024-456"],
    references: [
      "https://www.cve.org/CVERecord?id=CVE-2026-1190",
      "https://nvd.nist.gov/vuln/detail/CVE-2026-1190",
      "https://access.redhat.com/security/cve/cve-2026-1190",
      "https://bugzilla.redhat.com/show_bug.cgi?id=2430835",
    ],
  },
};

// Sample data for stories
const users: DSAVuln[] = [
  single,
  {
    dsa_id: "DSA-53c2-34e5e-8472",
    properties: { cve_ids: ["CVE-2024-12345"] },
    severity: "Critical",
    status: "Identified",
    title: "Security update for gst-plugins-bad",
    last_update: new Date(Date.now() - 238_476_234_234),
  },
  {
    dsa_id: "DSA-1121-cfccd-5913",
    properties: { cve_ids: ["CVE-2024-12345"] },
    severity: "Unknown",
    status: "Not affected",
    title: "Security update for libtiff",
    last_update: new Date(Date.now() - 238_476_234_234),
  },
  {
    dsa_id: "DSA-7de1-555df-0c27",
    properties: { cve_ids: ["CVE-2024-12345"] },
    severity: "Low",
    status: "Affected",
    title: "Security update for rustc",
    last_update: new Date(Date.now() - 238_476_234_234),
  },
  {
    dsa_id: "DSA-f0b5-c2c22-11c8",
    properties: { cve_ids: ["CVE-2024-12345"] },
    severity: "Medium",
    status: "Waiting",
    title: "Security update for linux",
    last_update: new Date(Date.now() - 238_476_234_234),
  },
];

// Default story
export const Default: Story = {
  args: {
    bleed: false,
    dense: false,
    grid: false,
    striped: false,
  },
  render: (args) => (
    <PageLayout
      header={
        <Header
          logo={<DetSysIcon size="base" />}
          elements={[
            <ColorSchemeToggle key="color-scheme-toggle" />,
            <Navigation
              elements={[
                <Placeholder key="element-1" height="100%" label="Element" />,
                <Placeholder key="navigation" height="100%" label="Nav" />,
              ]}
            />,
          ]}
        />
      }
      content={
        <>
          <h1>Security Advisories</h1>
          <Table {...args}>
            <DSATableHead />
            <TableBody>
              {users.map((vuln) => (
                <DSATableRow vuln={vuln} />
              ))}
            </TableBody>
          </Table>
        </>
      }
    />
  ),
};

// Default story
export const Specific: Story = {
  render: () => (
    <PageLayout
      header={
        <Header
          logo={<DetSysIcon size="base" />}
          elements={[
            <ColorSchemeToggle key="color-scheme-toggle" />,
            <Navigation
              elements={[
                <Placeholder key="element-1" height="100%" label="Element" />,
                <Placeholder key="navigation" height="100%" label="Nav" />,
              ]}
            />,
          ]}
        />
      }
      content={
        <>
          <DSAHeader vuln={single} />
          <LastUpdated date={single.last_update} />
          <Markdown
            source={`
## Description

A flaw was found in Keycloak's SAML brokering functionality.
When Keycloak is configured as a client in a Security Assertion Markup Language (SAML) setup, it fails to validate the \`NotOnOrAfter\` timestamp within the \`SubjectConfirmationData\`.
This allows an attacker to delay the expiration of SAML responses, potentially extending the time a response is considered valid and leading to unexpected session durations or resource consumption.


## Mitigation
The \`Request.max_content_length\` setting and resource limits provided by deployment software and platforms are available to limit the resources used during a request.
This vulnerability does not affect those settings.
All three types of limits should be considered and set appropriately when deploying an application.
`}
          />
        </>
      }
      panes={[<VulnerabilityProperties {...single.properties} />]}
    />
  ),
};
