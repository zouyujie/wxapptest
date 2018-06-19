package com.winter.service.impl;

import org.junit.Assert;
import org.junit.Before;
import org.junit.Ignore;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mybatis.spring.annotation.MapperScan;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringRunner;

import static org.junit.Assert.*;
@RunWith(SpringRunner.class)
@SpringBootTest
public class AreaServiceImplTest {

    @Before
    public void initData(){
    }
    @Test
    @Ignore
    public void findAllArea() {
        /*AreaServiceImpl areaService;
        Assert.assertEquals(2,areaService.findAllArea(1,2));*/
    }
}