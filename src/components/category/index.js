import React, { useEffect, useState } from 'react';
import Titlebar from '../layouts/Titlebar';
import Tablecomponet from '../layouts/Table';
import { Button, message, Form, Popconfirm, Table } from 'antd';
import AddCategory from './AddCategory';
import EditCategory from './EditCategory';
import { getCategory, deleteCategory } from '../../api/category';
import { EditTwoTone, DeleteTwoTone } from '@ant-design/icons';
import customMessage from '../../helpers/message.json';

const Categeory = () => {
  const [form] = Form.useForm();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEditModelOpen, setIsEditModelOpen] = useState(false);
  const [category, setCategory] = useState();
  const [editRecord, setEditRecord] = useState({});
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(5);
  const [count, setCount] = useState();
  const columns = [
    {
      title: 'Id',
      dataIndex: 'id',
      key: 'id',
      render: (_, record, id) => {
        return <>{(page - 1) * pageSize + (id + 1)}</>;
        // id + 1
      }
    },
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name'
    },
    {
      title: 'Action',
      dataIndex: 'action',
      key: 'action',
      render: (_, record) => {
        return (
          <>
            <span>
              <EditTwoTone onClick={() => updatecategoryData(record, record._id)} />

              <Popconfirm
                title="Are you sure to this item?"
                okText="Yes"
                cancelText="No"
                onConfirm={() => deleteCategoryData(record._id)}>
                <DeleteTwoTone />
              </Popconfirm>
            </span>
          </>
        );
      }
    }
  ];

  useEffect(() => {
    getCategoryList(page, pageSize);
  }, []);

  const getCategoryList = async (page, pagesize) => {
    const categoryList = await getCategory(page, pagesize);
    setCategory(categoryList.data);
    setCount(categoryList.count);
  };

  // Add Category Model Open click on the addCategory button
  const openCategoryModel = () => {
    setIsModalOpen(true);
  };

  //close category model
  const closeCategoryModel = () => {
    setIsModalOpen(false);
    form.resetFields();
  };

  //close category edit model
  const closeEditModel = () => {
    setIsEditModelOpen(false);
  };

  //update category data
  const updatecategoryData = (data) => {
    setIsEditModelOpen(true);
    setEditRecord(data);
  };

  // Delete Category data
  const deleteCategoryData = async (id) => {
    const result = await deleteCategory(id);
    if (result.status === 200) {
      message.success(customMessage.delete_common_message);
      getCategoryList(page, pageSize);
    }
  };

  //pagination
  const handlePagination = (page) => {
    setPage(page.current);
    setPageSize(page.pageSize);
    getCategoryList(page.current, page.pageSize);
  };

  return (
    <div>
      {/* Add Category Model */}
      <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
        <Button type="primary" onClick={openCategoryModel}>
          Add Category
        </Button>
      </div>

      {/* Show Title bar  */}
      <Titlebar title="Category"></Titlebar>

      {/* Add Model Componet  */}
      <AddCategory
        title="Add Category"
        isModalOpen={isModalOpen}
        cancel={closeCategoryModel}
        getCategory={getCategoryList}
        form={form}
        page={page}
        pageSize={pageSize}></AddCategory>

      {/* Edit Model Componet */}
      <EditCategory
        title="Edit Category"
        isEditModelOpen={isEditModelOpen}
        cancel={closeEditModel}
        getCategory={getCategoryList}
        editRecord={editRecord}
        page={page}
        pageSize={pageSize}></EditCategory>

      {/*Show Category list  */}
      {/* <Tablecomponet
        dataSource={category}
        columns={columns}
        pagination={{ current: handlePagination, pageSize: pageSize, total: 20 }}
        onChange={handlePagination}
      /> */}

      <Table
        dataSource={category}
        columns={columns}
        pagination={{ current: page, pageSize: pageSize, total: count }}
        onChange={handlePagination}
      />
    </div>
  );
};

export default Categeory;
