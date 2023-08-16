<?php $__env->startPush('title'); ?>
    <title>Demo page</title>
<?php $__env->stopPush(); ?>
<?php $__env->startSection('main-section'); ?>
    
    <h1>Welcome <?php echo e($name . ' ' . $id); ?> </h1>
    <?php echo $id; ?>

    <?php if($name == ''): ?>
        <?php echo e('Name is not defined'); ?>

    <?php else: ?>
        <?php echo e('Name is not empty'); ?>

    <?php endif; ?>
    <?php if(isset($id)): ?>
        <?php echo e('ID is set as : ' . $id); ?>;
    <?php endif; ?>
    
    <?php for($i = 0; $i < 10; $i++): ?>
        <p><?php echo e($i); ?></p>
    <?php endfor; ?>
    
    <?php
        $i = 1;
    ?>
    <?php while($i < 10): ?>
        <?php echo e($i); ?>

        <?php
            $i++;
        ?>
    <?php endwhile; ?>
    
    <?php
        $arr = [1, 2, 3, 4, 5, 6, 7, 8];
    ?>
    <?php $__currentLoopData = $arr; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $i): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
        <?php echo e($i); ?>

    <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
<?php $__env->stopSection(); ?>

<?php echo $__env->make('layouts.main', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?><?php /**PATH /Users/nirbhay/Desktop/Training/laravel/practice-app/resources/views/demo.blade.php ENDPATH**/ ?>