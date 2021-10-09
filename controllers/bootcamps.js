const Bootcamp = require('../models/Bootcamp');

// @desc      Get all bootcamps
// @route     GET /api/v1/bootcamps
// @access    Public
exports.getBootcamps = async (req, res, next) => { 

  try {
    const bootcamps = await Bootcamp.find();

    res
      .status(200)
      .json({ success: true, count: bootcamps.length, data: bootcamps });
  } catch (err) {
    res.status(400).json({ success: false });
  }

  };
  
  // @desc      Get single bootcamp
  // @route     GET /api/v1/bootcamps/:id
  // @access    Public
  exports.getBootcamp = async (req, res, next) => {
    
    try {
      const bootcamp = await Bootcamp.findById(req.params.id);
  
      if (!bootcamp) {
        return res.status(400).json({ success: false });
      }
  
      res.status(200).json({ success: true, data: bootcamp });
    } catch (err) {
      res.status(400).json({ success: false });
    }

  };
  
  // @desc      Create new bootcamp
  // @route     POST /api/v1/bootcamps
  // @access    Private
  exports.createBootcamp = async (req, res, next) => {
    
    //confirmar antes de realizar o create
    //console.log(req.body);

    try {
      const bootcamp = await Bootcamp.create(req.body);
  
      res.status(201).json({
        success: true,
        data: bootcamp
      });
    } catch (err) {
      res.status(400).json({ success: false });
    }
  };
  
  // @desc      Update bootcamp
  // @route     PUT /api/v1/bootcamps/:id
  // @access    Private
  exports.updateBootcamp = (req, res, next) => {
    res
      .status(200)
      .json({ success: true, msg: `Update bootcamp ${req.params.id}` });
  };
  
  // @desc      Delete bootcamp
  // @route     DELETE /api/v1/bootcamps/:id
  // @access    Private
  exports.deleteBootcamp = (req, res, next) => {
    res
      .status(200)
      .json({ success: true, msg: `Delete bootcamp ${req.params.id}` });
  };