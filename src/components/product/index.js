import { Button, Form } from 'antd';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Tablecomponet from '../layouts/Table';
import Titlebar from '../layouts/Titlebar';
import AddProduct from './AddProduct';
import { GetProductAction } from '../../redux/actions/productAction';
const Product = () => {

  const [form] = Form.useForm();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [product, setPorduct] = useState([]);
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(5);
  const [count, setCount] = useState();

  const dispatch = useDispatch();

  const result = useSelector((state) => state.productReducer.product);

  useEffect(() => {
    dispatch(GetProductAction(page, pageSize));
  }, []);

  useEffect(() => {
    if (result && result.data) {
      const data = result.data.map((item, index) => {
        return { ...item, key: index._id };
      });
      setPorduct(data);
      setCount(result.count)   
    }
  }, [result]);

  const columns = [
    {
      title: 'Id',
      dataIndex: 'id',
      key: 'id',
      render: (_, record, id) => {
        return <> {(page - 1) * pageSize + (id + 1)}</>;
        //{id + 1}
      }
    },
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name'
    },
    {
      title: 'Price',
      dataIndex: 'price',
      key: 'price'
    },
    {
      title: 'Qty',
      dataIndex: 'qty',
      key: 'price'
    }
  ];

  const openproductmodel = () => {
    setIsModalOpen(true);
  };

  /*
    close model
  */
  const closeproductmodel = () => {
    setIsModalOpen(false);
    form.resetFields();
  };


  // server side pagination
  const handlePagination = (value) => {
    setPage(value.current);
    setPageSize(value.pageSize);
    dispatch(GetProductAction(value.current, value.pageSize));
  };

  return (
    <div>
      {/* title componet  */}
      <Titlebar title="Product"></Titlebar>

      {/* Add Product Button */}
      <Button type="primary" onClick={openproductmodel}>
        Add Product
      </Button>

      {/* Open Product Model */}
      <AddProduct
        title="Add Product"
        isModalOpen={isModalOpen}
        cancel={closeproductmodel}
        form={form}
        getProduct={GetProductAction}
        page={page}
        pageSize= {setPageSize}
        ></AddProduct>

      {/* table componet  */}
      <Tablecomponet 
        dataSource={product}
        columns={columns}
        pagination={{ current: page, pageSize: pageSize, total: count }} 
        onChange={handlePagination}
 />
    </div>
  );
};

export default Product;
