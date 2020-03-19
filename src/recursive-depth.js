module.exports = class DepthCalculator {
    calculateDepth(arr) {
        let depth = 0;
        arr.forEach(item => {
            if (Array.isArray(item)) {
                let itemDepth = this.calculateDepth(item);
                if (itemDepth > depth) {
                    depth = itemDepth;
                }
            }
        });
        
        depth++;
        return depth;
    }
};