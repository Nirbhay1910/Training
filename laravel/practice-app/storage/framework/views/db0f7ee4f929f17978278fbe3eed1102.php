<label><?php echo e($label); ?></label>
<input type="<?php echo e($type); ?>" name="<?php echo e($name); ?>" value=<?php echo e(old($name)); ?>>
<?php $__errorArgs = ["$name"];
$__bag = $errors->getBag($__errorArgs[1] ?? 'default');
if ($__bag->has($__errorArgs[0])) :
if (isset($message)) { $__messageOriginal = $message; }
$message = $__bag->first($__errorArgs[0]); ?>
    <?php echo e($message); ?>

<?php unset($message);
if (isset($__messageOriginal)) { $message = $__messageOriginal; }
endif;
unset($__errorArgs, $__bag); ?>
<?php /**PATH /Users/nirbhay/Desktop/Training/laravel/practice-app/resources/views/components/input.blade.php ENDPATH**/ ?>