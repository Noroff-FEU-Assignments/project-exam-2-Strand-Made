import { useAuth } from "../context/AuthContext";
import Container from "../components/layout/Container/Container";
import Heading from "../components/Typography/Heading";
import Enquiries from "../components/admin-dashboard/Enquiries/Enquiries";
import EstablishmentsPanel from "../components/admin-dashboard/EstablishmentsPanel/EstablishmentsPanel";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import Switcher from "../components/layout/utilities/Switcher/Switcher";
import Emphasize from "../components/Typography/Emphasize";
import axios from "axios";
import { baseUrl } from "../api/baseUrl";
import EstablishmentElement from "../components/admin-dashboard/EstablishmentsPanel/EstablishmentElement";

const Admin = () => {
  let navigate = useNavigate();
  const { auth } = useAuth();
  const [enquiries, setEnquiries] = useState([]);
  const [establishments, setEstablishments] = useState([]);

  const user = auth?.userinfo?.email;
  useEffect(() => {
    if (!auth) {
      navigate("/login");
    }
  });

  useEffect(() => {
    const url = `${baseUrl}/enquiries`;
    const token = auth.token;
    async function getEnquiries() {
      try {
        const res = await axios.get(url, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        const { data } = res;
        const userEnquiries = data.filter((enquiry) => {
          if (enquiry.users_permissions_user.email === user) {
            return enquiry;
          }
          return null;
        });
        setEnquiries(userEnquiries);
      } catch (error) {
        console.log(error);
      }
    }
    getEnquiries();
  }, [user, auth.token]);

  useEffect(() => {
    const url = `${baseUrl}/establishments`;
    async function getEstablishments() {
      try {
        const res = await axios.get(url);
        const { data } = res;
        const isOwner = data.filter((establishment) => {
          if (establishment.user.email === user) {
            return establishment;
          }
          return null;
        });
        setEstablishments(isOwner);
      } catch (error) {
        console.log(error);
      }
    }
    getEstablishments();
  }, [user]);

  return (
    <Container>
      <main>
        <Heading>Admin Dashboard</Heading>
        <span>
          Welcome <Emphasize>{user}</Emphasize>
        </span>
        <Switcher space={2} threshold={300} limit={150}>
          {enquiries.map((enquiry) => (
            <Enquiries key={enquiry.id} enquiry={enquiry} />
          ))}

          <EstablishmentsPanel>
            {establishments.map((establishment) => (
              <EstablishmentElement
                key={establishment.id}
                name={establishment.title}
                slug={establishment.slug}
              />
            ))}
          </EstablishmentsPanel>
        </Switcher>
      </main>
    </Container>
  );
};

export default Admin;
