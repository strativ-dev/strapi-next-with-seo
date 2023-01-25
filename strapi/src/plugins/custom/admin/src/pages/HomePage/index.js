/*
 *
 * HomePage
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
import {getPages, updatePageSeo} from "../../api";
import {
  Alert,
  BaseHeaderLayout,
  Box,
  Button,
  EmptyStateLayout,
  Flex,
  Layout,
  Table,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  Typography,
  VisuallyHidden
} from "@strapi/design-system";
import {Illo} from "@strapi/plugin-seo/admin/src/components/SeoPage/Info/EmptyComponentLayout/illo";

const HomePage = () => {
  const [isLoading, setIsLoading] = React.useState(false);
  const [isUpdateLoading, setIsUpdateLoading] = React.useState(false);
  const [currentPageId, setCurrentPageId]=React.useState(null)
  const [pages, setPages] = React.useState(false);
  const [isSuccessfullySycned, setIsSuccessfullySynced] = React.useState(false);

  const fetchContentType = async () => {
    try {
      setIsLoading(true);
      const res = await getPages();
      setPages(res);
      setIsLoading(false);
    } catch (e) {
      setIsLoading(false);
    }
  };
  const updatePage =async (id) =>{
    try {
      setIsUpdateLoading(true);
      const res = await updatePageSeo(id);
      setIsSuccessfullySynced(true)
      setIsUpdateLoading(false);
    } catch (e) {
      setIsUpdateLoading(false);
    }
  }

  React.useEffect(async () => {
    await fetchContentType();
  }, []);

  console.log(pages)
  return (
    <Layout>
      {isSuccessfullySycned && (
        <Box
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "15px",
          }}
        >
          <Alert
            style={{ width: "500px" }}
            closeLabel="Close alert"
            title="Success!!"
            variant="success"
            onClose={() => setIsSuccessfullySynced(false)}
          >
            All data successfully synced
          </Alert>
        </Box>
      )}
      <BaseHeaderLayout
        title="All collections for syncing seo"
        as="h2"
        // subtitle={`Total boats: ${boatList?.length}`}
      />

      {pages ? (
        <Box padding={10} background="neutral100">
          <Table colCount={2} rowCount={pages?.length}>
            <Thead>
              <Tr>
                <Th>
                  <Typography variant={"sigma"}>Page Name</Typography>
                </Th>
                <Th>
                  <VisuallyHidden>Actions</VisuallyHidden>
                </Th>
              </Tr>
            </Thead>
            <Tbody>
              {pages?.map((contentType) => {
                return (
                  <Tr key={contentType.uid}>
                    <Td>
                      <Typography textColor="neutral800">
                        {contentType.name}
                      </Typography>
                    </Td>
                    <Td>
                      <Flex gap={2}>
                          <Button
                            loading={contentType.id === currentPageId && isUpdateLoading}
                            onClick={() => updatePage(contentType.id)}
                          >
                            Sync
                          </Button>

                      </Flex>
                    </Td>
                  </Tr>
                );
              })}
            </Tbody>
          </Table>
        </Box>
      ) : (
        <Box padding={8} background="neutral100">
          <EmptyStateLayout
            icon={<Illo />}
            content="You don't have any content yet..."
          />
        </Box>
      )}

    </Layout>
  );
};

export default HomePage;
