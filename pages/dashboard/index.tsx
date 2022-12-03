import React from 'react';
import Card from "../../components/Card";
import Layout from "../../components/DashboardLayout";

type Props = {}

export default function dashboard({ }: Props) {
  return (
    <Layout>
      <Card />
    </Layout>
  )
}